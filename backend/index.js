const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

dotenv.config();

const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI || process.env.MongoUrl;
const jwtSecret = process.env.JWT_SECRET;
const nodeEnv = process.env.NODE_ENV || "development";
let allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

// When no ALLOWED_ORIGINS are provided (local development), allow common
// localhost ports used by the frontend/dashboard so the browser won't block
// requests with CORS errors.
if (allowedOrigins.length === 0) {
  allowedOrigins = ["http://localhost:3000", "http://localhost:3001"];
}
const cookieDomain = process.env.COOKIE_DOMAIN;

// Validate required environment variables
if (!uri) {
  console.error(
    "ERROR: MONGODB_URI or MongoUrl environment variable is not set",
  );
  process.exit(1);
}

if (!jwtSecret) {
  console.error("ERROR: JWT_SECRET environment variable is not set");
  process.exit(1);
}

const authCookieOptions = {
  httpOnly: true,
  sameSite: nodeEnv === "production" ? "none" : "lax",
  secure: nodeEnv === "production",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

if (cookieDomain) {
  authCookieOptions.domain = cookieDomain;
}

// Configure CORS with allowed origins
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser requests (no origin) and allowed origins.
      if (!origin || allowedOrigins.includes(origin.trim())) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);
// Defensive CORS middleware: explicitly echo headers for browsers. This
// ensures the required headers are present even if another layer interferes.
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin && allowedOrigins.includes(origin.trim())) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");

  if (req.method === "OPTIONS") {
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE",
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      req.headers["access-control-request-headers"] ||
        "Content-Type,Authorization",
    );
    return res.sendStatus(204);
  }

  next();
});
app.use(cookieParser());
app.use(bodyParser.json());

const createAuthToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
    },
    jwtSecret,
    { expiresIn: "7d" },
  );
};

const sendAuthCookie = (res, token) => {
  res.cookie("token", token, authCookieOptions);
};

const clearAuthCookie = (res) => {
  res.clearCookie("token", authCookieOptions);
};

const sanitizeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
});

const requireAuth = (req, res, next) => {
  const tokenFromCookie = req.cookies?.token;
  const tokenFromHeader = req.headers.authorization?.startsWith("Bearer ")
    ? req.headers.authorization.slice(7)
    : null;
  const token = tokenFromCookie || tokenFromHeader;

  if (!token) {
    return res.status(401).json({ error: "Authentication required" });
  }

  try {
    req.user = jwt.verify(token, jwtSecret);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

// app.get("/addHoldings", async (req, res) => {

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempPositions.forEach((position) => {
//     let newHolding = new PositionsModel({
//       name: position.name,
//       qty: position.qty,
//       avg: position.avg,
//       price: position.price,
//       net: position.net,
//       day: position.day,
//       isLoss: position.isLoss,
//     });
//     newHolding.save();
//   });
//   res.send("Positions added successfully");
// });

app.post("/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email, and password are required" });
    }

    const existingUser = await UserModel.findOne({
      email: email.toLowerCase().trim(),
    });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      passwordHash,
    });

    const token = createAuthToken(user);
    sendAuthCookie(res, token);

    return res.status(201).json({
      message: "Signup successful",
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create user" });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await UserModel.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = createAuthToken(user);
    sendAuthCookie(res, token);

    return res.json({
      message: "Login successful",
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to log in" });
  }
});

app.get("/auth/me", requireAuth, async (req, res) => {
  const user = await UserModel.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  return res.json({ user: sanitizeUser(user) });
});

app.post("/auth/logout", (req, res) => {
  clearAuthCookie(res);
  return res.json({ message: "Logged out" });
});

app.get("/getHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/getPositions", requireAuth, async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.post("/newOrder", requireAuth, async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: Number(req.body.qty),
    price: Number(req.body.price),
    mode: req.body.mode,
  });
  await newOrder.save();

  res.status(201).send("Order placed successfully");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(uri, {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });

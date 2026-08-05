import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL;

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("USERID");

  useEffect(() => {
    let isMounted = true;

    const loadUser = async () => {
      try {
        const response = await api.get("/auth/me");

        if (isMounted) {
          setUserName(response.data?.user?.name || "USERID");
        }
      } catch (error) {
        if (isMounted) {
          setUserName("USERID");
        }
      }
    };

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const avatarText =
    userName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("")
      .slice(0, 2) || "U";

  return (
    <div className="menu-container">
      <a
        href={FRONTEND_URL}
        className="menu-brand"
        aria-label="Go to landing site"
      >
        <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      </a>
      <div className="menus">
        <ul>
          <li>
            <Link to="/" className="menu" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? "activeMenu" : "menuLabel"}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="menu"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? "activeMenu" : "menuLabel"}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              className="menu"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? "activeMenu" : "menuLabel"}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              className="menu"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? "activeMenu" : "menuLabel"}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              className="menu"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? "activeMenu" : "menuLabel"}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              className="menu"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? "activeMenu" : "menuLabel"}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{avatarText}</div>
          <p className="username">{userName}</p>
        </div>
        {isProfileDropdownOpen && (
          <div className="profile-dropdown">
            <a href={FRONTEND_URL} className="profile-link">
              Landing site
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

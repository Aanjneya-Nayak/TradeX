import React from "react";
import Hero from "./Hero";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";
import Universe from "./Universe";

import Navbar from "../Navbar";
import Footer from "../Footer";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftImage
        imageUrl="media/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage
        imageUrl="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your TradeX account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <LeftImage
        imageUrl="media/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.

"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage
        imageUrl="media/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo=""
        learnMore=""
      />
      <LeftImage
        imageUrl="media/varsity.png"
        productName="Varsity"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Universe />
    </div>
  );
}

export default ProductPage;

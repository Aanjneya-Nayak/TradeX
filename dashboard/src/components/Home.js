import React from "react";

import Dashboard from "./Dashboard";
import { GeneralContextProvider } from "./GeneralContext";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <GeneralContextProvider>
      <TopBar />
      <Dashboard />
    </GeneralContextProvider>
  );
};

export default Home;

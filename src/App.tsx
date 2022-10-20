import React from "react";
import TestBox from "./components/TestBox";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div id="rangeSpacerTop"></div>
      <TestBox />
      <div id="rangeSpacerBot"></div>
      <Footer />
    </div>
  );
};

export default App;

// Home.jsx
import React from "react";
import SWComp from "../components/layout/Swiper.jsx";
import "../Swiper.css";
import "../App.css";

function Home() {
  return (
    <>
      <h2>home</h2>
      <div className="mainSD">
        <SWComp />
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Text from "../components/Text";
function home() {
  return (
    <>
      <Header />
      <Text title="VIDEOLAVELS" />
      <div className="container">
        <Card />
      </div>
    </>
  );
}

export default home;

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Base = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Base;

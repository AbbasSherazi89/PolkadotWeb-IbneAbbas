import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Base = (props) => {
  return (
    <>
      <div className="message">
        <img className="img-fluid message-img p-2" src="assets/Message.svg" alt=""  width={50}/>
      </div>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Base;

"use strict";
import React from "react";
import "./BR2JSX.css";

const BR2JSX = (props) => {
  const arr = [];
  props.text.split(/<br\s{0,1}\/{0,1}>/).forEach((e, item) => {
    arr.push(e);
    arr.push(<br key={item} />);
  });
  arr.pop();

  return <div className="br2jsx">{arr}</div>;
};

export default BR2JSX;

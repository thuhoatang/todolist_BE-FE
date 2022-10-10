import React, { useState } from "react";
import Input from "../Input";
import Listtodo from "../Listtodo";

const Home = ({}) => {
  return (
    <div className="ui container">
      <Input />
      <Listtodo />
    </div>
  );
};

export default Home;

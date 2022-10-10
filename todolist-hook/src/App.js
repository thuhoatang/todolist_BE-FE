import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Spinner from "./hooks/SpinnerLoading";
import Modal from "./components/Modal";
import routesDefault from "./config";

const renderRoute = routesDefault.map((item, index) =>
  item.url == "*" ? (
    <Route path="*" element={<Navigate to="/" replace />} key={index} />
  ) : (
    <Route path={item.url} element={<item.component />} key={index} />
  )
);
const App = () => {
  return (
    <>
      <Routes>{renderRoute}</Routes>
      <Spinner />
      <Modal />
    </>
  );
};

export default App;

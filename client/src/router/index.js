import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../screens/home";
import Form from "../screens/form";
const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/image" component={Form} />
    </BrowserRouter>
  );
};
export default Router;

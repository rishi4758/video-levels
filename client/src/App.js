import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { fetchImageList } from "./store/actions";
import Router from "./router";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageList());
  }, []);
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;

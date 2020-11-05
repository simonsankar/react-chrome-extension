import React, { useState, useEffect } from "react";
import "./App.css";
import $ from "jquery";

function App() {
  const [price, setPrice] = useState("");
  useEffect(() => {
    let prc = $("#priceblock_ourprice").text();
    setPrice(prc);
  }, []);

  return <div>{price}</div>;
}

export default App;

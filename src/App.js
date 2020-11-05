import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import $ from "jquery";

function App() {
  const [price, setPrice] = useState("");
  useEffect(() => {
    let prc = $("#priceblock_ourprice").text();
    setPrice(prc);
  }, []);

  return (
    <div class="box has-background-black">
      <h2 class="has-text-white">{price}</h2>
    </div>
  );
}

export default App;

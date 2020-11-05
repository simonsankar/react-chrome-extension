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
    <div class="px-4 py-3">
      <h2 class="has-text-white">{price}</h2>
    </div>
  );
}

export default App;

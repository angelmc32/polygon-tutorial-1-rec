import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

const App = () => {
  const [address, setAddress] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <main className="uk-section">
        {address ? <h2>Address: {address}</h2> : <h2>No wallet connected</h2>}
      </main>
    </div>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/styles.css";

const App = () => {
  const [address, setAddress] = useState(null);
  const [chainId, setChainId] = useState(null);

  useEffect(() => {
    if (address) console.log(address);
  }, [address]);
  return (
    <div className="App">
      <Navbar
        address={address}
        setAddress={setAddress}
        setChainId={setChainId}
      />
      <main className="uk-section">
        {address ? <h4>Address: {address}</h4> : <h4>No wallet connected</h4>}
      </main>
    </div>
  );
};

export default App;

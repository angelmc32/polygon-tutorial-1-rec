import { Fragment } from "react";
import { ethers } from "ethers";
import { login } from "../api/login";

const ConnectWalletButton = ({
  setAddress,
  setChainId,
  isLoadingState,
  setIsLoadingState,
}) => {
  const handleWalletConnect = async () => {
    setIsLoadingState(true);
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      await login(accounts[0]);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
      const { chainId } = await provider.getNetwork();
      setChainId(chainId);
      setIsLoadingState(false);
    } else {
      alert("No Wallet Detected");
    }
  };
  return (
    <button
      className="uk-button uk-button-primary"
      onClick={handleWalletConnect}
      disabled={isLoadingState}
    >
      {isLoadingState ? (
        <Fragment>
          <div uk-spinner="true" />
          Logging in
        </Fragment>
      ) : (
        "Lens Login"
      )}
    </button>
  );
};

export default ConnectWalletButton;

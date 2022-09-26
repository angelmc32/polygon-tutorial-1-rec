import { ethers } from "ethers";
import { login } from "../api/login";

const ConnectWalletButton = ({ setAddress, setChainId }) => {
  const handleWalletConnect = async () => {
    const { ethereum } = window;
    if (ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      setAddress(address);
      const { chainId } = await provider.getNetwork();
      setChainId(chainId);

      await login(accounts[0]);
    } else {
      alert("No Wallet Detected");
    }
  };
  return (
    <button
      className="uk-button uk-button-primary"
      onClick={handleWalletConnect}
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;

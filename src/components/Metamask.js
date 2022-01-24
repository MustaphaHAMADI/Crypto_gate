import { useMetaMask } from "metamask-react";
import { accHash } from "../functions/utils";

const Metamask = () => {
  const { status, connect, account } = useMetaMask();

  if (status === "initializing")
    return <div>Synchronisation with MetaMask ongoing...</div>;

  if (status === "unavailable") return <div>Please install Metamask</div>;

  if (status === "notConnected")
    return <button onClick={connect}>Connect Wallet</button>;

  if (status === "connecting") return <div>Connecting...</div>;

  if (status === "connected")
    return <div>Connected account: {accHash(account)}</div>;

  return null;
};
export default Metamask;

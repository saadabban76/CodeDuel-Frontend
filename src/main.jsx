import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  walletConnect
} from "@thirdweb-dev/react";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet({
          recommended: true
        }),
        coinbaseWallet(),
        walletConnect()
      ]}
      activeChain="ethereum"
      clientId="e12bf4273bc073fcae7f55d5163cbda8"
    >
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThirdwebProvider>
  </React.StrictMode>
);

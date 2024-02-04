import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  phantomWallet,
  walletConnect
} from "@thirdweb-dev/react";
import { RecoilRoot } from "recoil";
import SolanaContext from "./lib/SolanaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThirdwebProvider
      supportedWallets={[
        phantomWallet({
          recommended: true
        })
      ]}
      clientId="e12bf4273bc073fcae7f55d5163cbda8"
    >
      <RecoilRoot>
        <SolanaContext>
          <App />
        </SolanaContext>
      </RecoilRoot>
    </ThirdwebProvider>
  </React.StrictMode>
);

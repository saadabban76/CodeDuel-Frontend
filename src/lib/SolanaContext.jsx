import {
  ConnectionProvider,
  WalletProvider
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import React, { useMemo } from "react";

const SolanaContext = ({ children }) => {
  const endpoint = "https://api.devnet.solana.com"; // Change the endpoint to Solana devnet

  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        {children}
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default SolanaContext;

import { WebBundlr } from "@bundlr-network/client";
import type { WalletAdapter } from "@solana/wallet-adapter-base";

export async function createBundlr(walletAdapter: WalletAdapter) {
  const bundlr = new WebBundlr("https://devnet.bundlr.network", "solana", walletAdapter);
  await bundlr.ready();
  return bundlr;
}

import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import { manrope, noto } from "@/utils/font";
import { embeddedWallet, metamaskWallet, ThirdwebProvider } from "@thirdweb-dev/react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const activeChain = "mumbai";
  return (
    <main className={`$${manrope.variable} ${noto.variable} font-manrope`}>
      <ThirdwebProvider
        clientId="403343382d341f653800c95309f735cf"
        activeChain={activeChain}
        supportedWallets={[
          metamaskWallet(),
          embeddedWallet({
            auth: {
              options: ["google"],
            },
          }),
        ]}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </main>
  );
}

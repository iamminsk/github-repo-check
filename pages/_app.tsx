import type { AppProps } from "next/app";

import "../theme/globalStyles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

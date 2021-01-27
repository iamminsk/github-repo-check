import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>superchat-frontend-challenge</title>
          <link
            rel="preload"
            href="/fonts/Cairo-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          ></link>
          <link
            rel="preload"
            href="/fonts/OpenSans-Light.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="true"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

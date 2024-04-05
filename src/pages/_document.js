// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="https://i.ibb.co/hdXN0Dw/logored-ezgif-com-webp-to-gif-converter.gif" />
          {/* Add custom scripts here */}
          <script src='https://terminal.jup.ag/main-v2.js' defer></script>
          {/* ... */}
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

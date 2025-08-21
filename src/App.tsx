import { useEffect, useState } from "react";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";

const UNSEIS = ["大吉", "中吉", "吉", "末吉", "小吉", "凶", "大凶"] as const;

const generateTwitterShareUrl = (unsei: string) => {
  const url = new URL(
    "https://twitter.com/intent/tweet?url=https%3A%2F%2Fsugarheart.utgw.net%2Fqrcode-omikuji%2F"
  );
  url.searchParams.set('text', `${unsei}でした!!`)
  url.searchParams.set('hashtag', 'qrcode_omikuji')
  return url;
};

function App() {
  const [unseiIndex, setUnseiIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setUnseiIndex((curr) => (curr + 1) % UNSEIS.length);
    }, 50);
    return () => {
      window.clearInterval(timer);
    };
  });
  return (
    <>
      <h1>QRコードを読み込んでTwitterでシェアしてね</h1>
      <QRCodeSVG value={generateTwitterShareUrl(UNSEIS[unseiIndex]).toString()} />
      <div style={{ marginTop: "100px" }}>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
        >
          Tweet
        </a>
      </div>
      <script async src="https://platform.twitter.com/widgets.js"></script>
    </>
  );
}

export default App;

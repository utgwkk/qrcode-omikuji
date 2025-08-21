import { useEffect, useState } from "react";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";

const UNSEIS = ["大吉", "中吉", "吉", "末吉", "小吉", "凶", "大凶"] as const;

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
      <QRCodeSVG value={UNSEIS[unseiIndex]} />
      <div style={{marginTop: '100px'}}>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet"
        >
          Tweet
        </a>
      </div>
      <script async src="https://platform.twitter.com/widgets.js"></script>
      <a
        href="https://b.hatena.ne.jp/entry/"
        className="hatena-bookmark-button"
        data-hatena-bookmark-layout="vertical-normal"
        data-hatena-bookmark-lang="ja"
        title="このエントリーをはてなブックマークに追加"
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width="20"
          height="20"
          style={{border: 'none'}}
        />
      </a>
      <script
        type="text/javascript"
        src="https://b.st-hatena.com/js/bookmark_button.js"
      ></script>
    </>
  );
}

export default App;

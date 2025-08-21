import { useEffect, useState } from "react";
import "./App.css";
import { QRCodeSVG } from "qrcode.react";

const UNSEIS = ["大吉", "中吉", "吉", "末吉", "小吉", "凶", "大凶"] as const;

function App() {
  const [unseiIndex, setUnseiIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => {
      setUnseiIndex(curr => (curr + 1) % UNSEIS.length)
    }, 50);
    return () => {
      window.clearInterval(timer)
    }
  });
  return <QRCodeSVG value={UNSEIS[unseiIndex]} />;
}

export default App;

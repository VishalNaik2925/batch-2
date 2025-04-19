import { useState, useEffect } from 'react';
import './ColorGenerator.css';

const ColorGenerator = () => {
  const [color, setColor] = useState('#000000');
  const [showCopied, setShowCopied] = useState(false);

  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setColor(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setShowCopied(true);
  };

  useEffect(() => {
    if (showCopied) {
      const timer = setTimeout(() => {
        setShowCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopied]);

  return (
    <div className="color-generator">
      <h1>Dynamic Color Generator</h1>
      <div className="color-box" style={{ backgroundColor: color }}></div>
      <div className="color-code">{color}</div>
      <div className="buttons">
        <button onClick={generateRandomColor}>Generate Color</button>
        <button onClick={copyToClipboard}>Copy Color Code</button>
      </div>
      {showCopied && <div className="copied-message">Copied!</div>}
    </div>
  );
};

export default ColorGenerator; 
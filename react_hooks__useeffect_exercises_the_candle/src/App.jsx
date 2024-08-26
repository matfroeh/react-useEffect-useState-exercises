// Instructions:
// This one is just for fun! We want this candle to reduce its height as time passes.
// From the CSS point of view, that can be achieved by modifying the height of
// the candleContainer or assigning a style prop that assigns the desired height,
// e.g. style={{ height: 85%}}
// We want to let an effect control this of course.

// Create an Effect that reduces the height of the candle every 2 seconds
// Be sure you use a cleanup function!
// Because fire is dangerous, make sure to reset the candle height from the effect
// as soon as it reaches 10%
// Infinite candles :D

import { useEffect, useRef } from "react";

const Candle = () => {

  const candleContainer = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      reduceHeight();
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const reduceHeight = () => {
    const currentHeight = candleContainer.current.style.height;
    console.log(currentHeight);
    
    if (parseInt(currentHeight) <= 10) {
      candleContainer.current.style.height = "100%";
      return;
    } 
    candleContainer.current.style.height = `${parseInt(currentHeight) - 10}%`;
  }

  return (
    <div className="exercise">
      <div ref={candleContainer} style={{height: '100%'}} className="candleContainer">
        <div className="candle">
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          <div className="wick" />
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return <Candle />;
};

export default App;

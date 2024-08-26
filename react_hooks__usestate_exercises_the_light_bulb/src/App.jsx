import { useState } from "react";

const LightBulb = (toggle) => {

  return (   
    <div className= {toggle.toggle ? "container" : "container night"} >
      <div className="bulb-light">
        <div id="light" />
        <div id="bulb">
          <div className="bulb-top">
            <div className="reflection" />
          </div>
          <div className="bulb-middle-1" />
          <div className="bulb-middle-2" />
          <div className="bulb-middle-3" />
          <div className="bulb-bottom" />
        </div>

        <div id="base">
          <div className="screw-top" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-c" />
          <div className="screw-d" />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleLight = () => {
    setToggle((prev) => !prev);   
  }

  return (
    <>
      <button onClick={toggleLight}>Switch</button>
      <LightBulb toggle={toggle}/>
    </>
  );
};

export default App;

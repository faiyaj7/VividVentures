import React from "react";

const Loader = () => {
  return (
    <div className="mainDev w-full">
      {" "}
      <div className="scene">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="cube-faces">
              <div className="cube-face shadow" />
              <div className="cube-face bottom" />
              <div className="cube-face top" />
              <div className="cube-face left" />
              <div className="cube-face right" />
              <div className="cube-face back" />
              <div className="cube-face front" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

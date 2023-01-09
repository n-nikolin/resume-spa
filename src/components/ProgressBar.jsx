import React from "react";

const ProgressBar = ({ languages, total }) => {
  const getSpanWidth = (total, value) => {
    return `${(value / total) * 100}%`;
  };

  return (
    <div className="progress-bar">
      {Object.entries(languages).map(([key, value], i) => {
        return (
          <span
            className="progress-bar-section"
            key={i}
            id={key.toLowerCase()}
            style={{
              width: getSpanWidth(total, value),
            }}
          ></span>
        );
      })}
    </div>
  );
};

export default ProgressBar;

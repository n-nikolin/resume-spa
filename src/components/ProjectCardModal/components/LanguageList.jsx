import React from "react";

const LanguageList = ({ languages, total }) => {
  const getPercentage = (total, value) => {
    return ((value / total) * 100).toFixed(1);
  };

  return (
    <ul>
      {Object.entries(languages).map(([key, value], i) => {
        return (
          <li key={i}>
            <span className="circle" id={key.toLowerCase()}></span>
            {key}: {getPercentage(total, value)}%
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageList;

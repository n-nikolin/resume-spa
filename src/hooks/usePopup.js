import React, { useState, useEffect } from "react";

const usePopup = (value) => {
  const [isMessageSent, setIsMessageSent] = useState(value);
  // shows message popup
  useEffect(() => {
    if (isMessageSent === true) {
      const timeId = setTimeout(() => {
        setIsMessageSent(false);
      }, 2500);
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [isMessageSent]);
  return [isMessageSent, setIsMessageSent];
};

export default usePopup;

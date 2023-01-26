import React, { useEffect } from "react";

const useTitle = (currentTitle) => {
  useEffect(() => {
    document.title = currentTitle;
  }, [currentTitle]);
  return currentTitle;
};

export default useTitle;

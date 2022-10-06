import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  // // for string
  // const initial = JSON.parse(saved);
  // // for boolean
  const initial = saved.value; 
  return initial || defaultValue;
}

export const useChangeLanguage = (key, defaultValue) => {
    const [current, setCurrent] = useState()
    return 0
}
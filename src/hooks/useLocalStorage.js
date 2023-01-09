import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  const saved = localStorage.getItem(key);
  // // for string
  const initial = JSON.parse(saved);
  // // for boolean
  // const initial = saved.value;
  return initial || defaultValue;
};

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;

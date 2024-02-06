import React, { useState, useEffect } from "react";

export default function useLocalStorage(key, initialValue = '') {

  // get item from local storage
  function getItemFromStorage(key, initialValue = '') {
    const item = JSON.parse(localStorage.getItem(key));
    if(item) return item;

    // if initial value is a function, call it
    if (typeof(initialValue) === 'function') return initialValue();

    return initialValue;
  }

  // set local storage to state
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    return getItemFromStorage(key, initialValue)
  });

  useEffect(() => {
    // when local storage changes, update in local storage
    localStorage.setItem(key, JSON.stringify(localStorageValue));
  }, [localStorageValue])

  return [localStorageValue, setLocalStorageValue];
  
}
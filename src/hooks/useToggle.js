import { useState } from "react";


export default function useToggle(defaultValue = true, oppositeValue = !defaultValue) {
  
  const [value, setValue] = useState(defaultValue);

  function toggleValue(forcedValue) {
    // set value to the value passed instead of toggling, if provided
    if(forcedValue) setValue(forcedValue)
    // toggle state value
    else if(value === defaultValue) {
      setValue(oppositeValue);
    } else {
      setValue(defaultValue);
    }
  }

  return [value, toggleValue];

}
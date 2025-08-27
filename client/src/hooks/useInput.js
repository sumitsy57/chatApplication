import { useState } from "react";

const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const reset = () => setValue(initialValue);

  return { value, changeHandler, reset };
};

export default useInput;

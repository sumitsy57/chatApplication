import { useState, useEffect } from "react";

const useInputValidation = (initialValue = "", validator = null) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    if (validator) {
      const errorMessage = validator(value);
      setError(errorMessage);
    }
  }, [value, validator]);

  return {
    value,
    changeHandler,
    error,
  };
};

export default useInputValidation;

import { useState } from "react";

export function useInputChange(initialState) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    console.log(e);
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function reset(newState) {
    setState(newState);
  }

  return [state, handleChange, reset];
}

import { useState } from "react";

export function useInputChange(initialState) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
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

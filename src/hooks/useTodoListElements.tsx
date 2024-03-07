import { useState } from "react";

const useTodoListElements = () => {
  const [state, setState] = useState<string>("");

  function stateEventHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value);
  }

  return [state, stateEventHandler];
};

export default useTodoListElements;

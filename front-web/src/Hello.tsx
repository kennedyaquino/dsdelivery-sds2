import { useEffect, useState } from "react";

type Props = {
  message: string;
};

function Hello({ message }: Props) {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Componete Hello {message}</h1>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDecrease}>Descrementar</button>
      <h3>Valor do contador: {counter}</h3>
    </div>
  );
}

export default Hello;

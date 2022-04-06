import React, { useState } from 'react';

interface Props {
  render: (count: number, increamentCount: () => void) => JSX.Element | null;
}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  const increamentCount = () => {
    setCount(count + 1);
  };

  return <div>{props.render(count, increamentCount)}</div>;
};

export default Counter;

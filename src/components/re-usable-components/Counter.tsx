import React, { useState } from 'react';

interface Props {
  render: () => JSX.Element | null;
}

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);

  return <div>Counter</div>;
};

export default Counter;

import React from 'react';

interface Props {
  render: () => JSX.Element | null;
}

const Counter = (props: Props) => {
  return <div>Counter</div>;
};

export default Counter;

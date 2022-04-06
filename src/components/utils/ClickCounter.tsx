import React from 'react';

interface Props {
  count: number;
  increamentCounter: () => void;
}

const ClickCounter = (props: Props) => {
  return <div>ClickCounter</div>;
};

export default ClickCounter;

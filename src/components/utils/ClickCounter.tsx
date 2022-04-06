import React from 'react';

interface Props {
  count: number;
  increamentCounter: () => void;
}

const ClickCounter = (props: Props) => {
  return (
    <div>
      <button onClick={props.increamentCounter}>
        Click Increamentor: {props.count}
      </button>
    </div>
  );
};

export default ClickCounter;

import React from 'react';
import { Props } from './ClickCounter';

const KeyUpCounter = (props: Props) => {
  return (
    <div>
      <h3 onKeyUp={props.increamentCounter}>Key Up Incrementor: </h3>
      <h2>{props.count}</h2>
    </div>
  );
};

export default KeyUpCounter;

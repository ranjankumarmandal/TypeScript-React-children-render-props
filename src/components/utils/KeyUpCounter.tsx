import React from 'react';
import { Props } from './ClickCounter';

const KeyUpCounter = (props: Props) => {
  return (
    <div>
      <input
        type='text'
        onKeyUp={props.increamentCounter}
        placeholder='click and press any key'
      />{' '}
      Key Up Incrementor: {props.count}
    </div>
  );
};

export default KeyUpCounter;

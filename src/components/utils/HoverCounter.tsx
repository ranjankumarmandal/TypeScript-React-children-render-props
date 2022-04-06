import React from 'react';
import { Props } from './ClickCounter';

const HoverCounter = (props: Props) => {
  return (
    <div>
      <h2 onMouseOver={props.increamentCounter}>
        Mouse Over Increamentor: {props.count}
      </h2>
    </div>
  );
};

export default HoverCounter;

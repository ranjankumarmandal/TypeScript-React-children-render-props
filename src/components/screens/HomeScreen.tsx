import React from 'react';
import Counter from '../re-usable-components/Counter';
import ClickCounter from '../utils/ClickCounter';
import HoverCounter from '../utils/HoverCounter';
import KeyUpCounter from '../utils/KeyUpCounter';

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome, Let's Research!</h1>
      <Counter
        render={(count, increamentCount) => (
          <ClickCounter count={count} increamentCounter={increamentCount} />
        )}
      />

      <Counter
        render={(count, increamentCount) => (
          <HoverCounter count={count} increamentCounter={increamentCount} />
        )}
      />
    </div>
  );
};

export default HomeScreen;

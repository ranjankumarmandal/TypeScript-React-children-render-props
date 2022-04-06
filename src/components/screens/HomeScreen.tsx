import React from 'react';
import Counter from '../re-usable-components/Counter';
import ClickCounter from '../utils/ClickCounter';

const HomeScreen = () => {
  return (
    <div>
      <h1>Welcome, Let's Research!</h1>
      <Counter
        render={(count, increamentCount) => (
          <ClickCounter count={count} increamentCounter={increamentCount} />
        )}
      />
    </div>
  );
};

export default HomeScreen;

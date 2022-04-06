import React from 'react';

interface Props {}

const HomeContainer: React.FC<Props> = (props) => {
  return <div className='center'>{props.children}</div>;
};

export default HomeContainer;

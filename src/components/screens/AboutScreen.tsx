import React from 'react';

const AboutScreen = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p>App Name - React Concepts with TypeScript</p>
      <p>Description - TypeScript + React + React Router Dom v5.0.0 </p>
      <p>
        By -{' '}
        <b>
          <a
            style={{ textDecoration: 'none' }}
            href='https://www.linkedin.com/in/ranjan-kumar-m-818367158/'
            target='_blank'
          >
            Ranjan Kumar Mandal
          </a>
        </b>
      </p>
    </div>
  );
};

export default AboutScreen;

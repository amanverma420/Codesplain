import React from 'react';

const Error = ({ error }) => {
  return (
    <p
      style={{
        color: 'red',
        marginTop: '12px',
        fontWeight: '500',
      }}
    >
      {error}
    </p>
  );
};

export default Error;

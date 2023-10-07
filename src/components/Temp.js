import React from 'react';

function Temp() {
  return (
    <>
      <label htmlFor="text-input">Enter text (max 50 characters):</label>
      <input type="number" id="text-input" maxLength={5} />
    </>
  );
}

export default Temp;

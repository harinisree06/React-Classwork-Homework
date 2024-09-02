import React, { useState } from 'react';

const ArrayManipulation = () => {
  const [array, setArray] = useState(['North', 'South', 'East', 'West']);

  const handleArrayButtonClick = () => {
    const newArray = array.map(element => '$ {element} News');
    setArray(newArray);
  };

  const handleRefreshArrayButtonClick = () => {
    const joinedString = array.join(', ');
    setArray([joinedString]);
  };

  return (
    <div>
      <h1>Array Manipulation</h1>
      <div>
        <button onClick={handleArrayButtonClick}>Array</button>
        <button onClick={handleRefreshArrayButtonClick}>Refresh Array</button>
      </div>
      <div>
        <h2>Array Elements:</h2>
        <ul>
          {array.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArrayManipulation;

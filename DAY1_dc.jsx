import React, { useState, useEffect } from 'react';

const RealTimeTable=()=>{
  const [formData, setFormData] = useState({ name: '', age: '' });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange=(e)=>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData , formData]);
    setFormData({ name: '', age: '' }); 
  };


  useEffect(() => {
    const intervalId = setInterval(() => {

      setSubmittedData([...submittedData]);
    }, 1000);


    return () => clearInterval(intervalId);
  }, [submittedData]);

  return (
    <div>
      <h1>Submit Form and Display in Real-Time Table</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealTimeTable;

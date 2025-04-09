import React from 'react';
import axios from 'axios';

const Register = () => {
  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value
    };
    await axios.post('http://localhost:9000/users', user);
    alert('User Registered Successfully');
  };

  return (
    <div style={{ backgroundColor: '#f0faff', minHeight: '100vh', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleregister} style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%' }}>
        <label>Name:</label>
        <input type="text" name="name" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <label>Age:</label>
        <input type="text" name="age" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ backgroundColor: '#00796b', color: '#ffffff', border: 'none', padding: '10px', width: '100%', borderRadius: '6px', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
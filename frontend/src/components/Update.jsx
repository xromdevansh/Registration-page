import React from 'react';
import axios from 'axios';

const Update = () => {
  const handleUpdate = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const name = e.target.name.value;
    const age = e.target.age.value;
    const data = { name, age };
    await axios.put(`http://localhost:9000/users/${id}`, data);
    alert('Success');
  };

  return (
    <div style={{ backgroundColor: '#fff8e1', minHeight: '100vh', padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleUpdate} style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '500px', width: '100%' }}>
        <label>ID:</label>
        <input type="text" name="id" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <label>Name:</label>
        <input type="text" name="name" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <label>Age:</label>
        <input type="text" name="age" required style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ backgroundColor: '#f9a825', color: '#ffffff', border: 'none', padding: '10px', width: '100%', borderRadius: '6px', cursor: 'pointer' }}>Update</button>
      </form>
    </div>
  );
};

export default Update;
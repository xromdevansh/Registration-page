import React from 'react';
import axios from 'axios';

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    await axios.delete(`http://localhost:9000/users/${id}`);
    alert('Product deleted successfully');
  };

  return (
    <div style={{ backgroundColor: '#eef9f2', minHeight: '100vh', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#d32f2f' }}>Delete Product</h1>
      <form onSubmit={handleDelete} style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%' }}>
        <input name="id" placeholder="Enter Product ID" style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '6px', border: '1px solid #ccc' }} />
        <button type="submit" style={{ backgroundColor: '#d32f2f', color: '#ffffff', border: 'none', padding: '10px', width: '100%', borderRadius: '6px', cursor: 'pointer' }}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default Delete;

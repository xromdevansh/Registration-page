import React, { useState, useEffect } from 'react';
import axios from 'axios';

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    viewData();
  }, []);

  const viewData = async () => {
    const res = await axios.get('https://registration-page-2.onrender.com/users');
    setUsers(res.data);
  };

  return (
    <div style={{ backgroundColor: '#fce4ec', minHeight: '100vh', padding: '30px' }}>
      <h1 style={{ color: '#ad1457', textAlign: 'center', marginBottom: '20px' }}>Registered Users List</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f06292' }}>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{user.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{user.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #eee' }}>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View;
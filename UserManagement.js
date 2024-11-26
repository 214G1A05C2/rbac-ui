import React, { useState, useEffect } from 'react';
import { fetchUsers, addUser, updateUser, deleteUser } from '../mockApi';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: '', status: 'Active' });

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAddUser = () => {
    addUser(newUser).then(() => {
      setUsers([...users, newUser]);
      setNewUser({ name: '', email: '', role: '', status: 'Active' });
    });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => setUsers(users.filter(user => user.id !== id)));
  };

  return (
    <div>
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Add User</h3>
        <input placeholder="Name" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
        <input placeholder="Email" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
        <input placeholder="Role" value={newUser.role} onChange={(e) => setNewUser({ ...newUser, role: e.target.value })} />
        <button onClick={handleAddUser}>Add</button>
      </div>
    </div>
  );
};

export default UserManagement;

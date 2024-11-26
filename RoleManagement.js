import React, { useState, useEffect } from 'react';
import { fetchRoles, addRole } from '../mockApi';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: '', permissions: [] });

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  const handleAddRole = () => {
    addRole(newRole).then(() => {
      setRoles([...roles, newRole]);
      setNewRole({ name: '', permissions: [] });
    });
  };

  return (
    <div>
      <h1>Role Management</h1>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Add Role</h3>
        <input placeholder="Role Name" value={newRole.name} onChange={(e) => setNewRole({ ...newRole, name: e.target.value })} />
        <input placeholder="Permissions (comma-separated)" value={newRole.permissions.join(', ')} 
          onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value.split(',') })} />
        <button onClick={handleAddRole}>Add</button>
      </div>
    </div>
  );
};

export default RoleManagement;

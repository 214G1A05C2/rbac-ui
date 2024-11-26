let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' }
];

let roles = [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
];

export const fetchUsers = () => Promise.resolve(users);
export const fetchRoles = () => Promise.resolve(roles);
export const addUser = (user) => {
  users = [...users, { id: Date.now(), ...user }];
  return Promise.resolve();
};
export const updateUser = (id, updatedUser) => {
  users = users.map(user => (user.id === id ? { ...user, ...updatedUser } : user));
  return Promise.resolve();
};
export const deleteUser = (id) => {
  users = users.filter(user => user.id !== id);
  return Promise.resolve();
};
export const addRole = (role) => {
  roles = [...roles, { id: Date.now(), ...role }];
  return Promise.resolve();
};

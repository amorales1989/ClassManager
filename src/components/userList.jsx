import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const UserList = ({ users, setSelectedUser }) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} disablePadding>
          <ListItemButton onClick={() => setSelectedUser(user)}>
            <ListItemText primary={user.name} style={{color: '#f6f8fa'}} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;

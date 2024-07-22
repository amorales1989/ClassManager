import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserList from '../components/userList';
import ChatWindow from '../components/chatWindows';
import SwipeableTemporaryDrawer from '../components/sidebar';
import NavBar from '../components/Navbar';

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ];

  return (
    <>
    <NavBar />
    <SwipeableTemporaryDrawer />
    <Box sx={{ height: '90vh', width: '150vh', display: 'flex', marginTop: 8,marginLeft: 15 }}>
          <Grid container>
              <Grid item xs={3} sx={{ borderRight: '1px solid #ddd' }}>
                  <UserList users={users} setSelectedUser={setSelectedUser} />
              </Grid>
              <Grid item xs={9}>
                  {selectedUser ? (
                      <ChatWindow user={selectedUser} />
                  ) : (
                      <Box sx={{ p: 2, color:'#f6f8fa'}}>Seleccione un usuario para comenzar a chatear</Box>
                  )}
              </Grid>
          </Grid>
      </Box></>
  );
};

export default ChatPage;

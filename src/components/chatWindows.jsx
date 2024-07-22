import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const ChatWindow = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'me' }]);
      setNewMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: 2, borderBottom: '1px solid #ddd', color:'#f6f8fa' }}>
        <h3>Chat con {user.name}</h3>
      </Box>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        <List>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.sender === 'me' ? 'flex-end' : 'flex-start' }}>
              <ListItemText
                primary={message.text}
                sx={{
                    color: message.sender?'#000':'',
                  bgcolor: message.sender === 'me' ? '#DCF8C6' : '#FFF',
                  borderRadius: 2,
                  p: 1,
                  maxWidth: '70%',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ display: 'flex', p: 2, borderTop: '1px solid #ddd' }}>
        <TextField
        style={{background:'white'}} 
          fullWidth
          variant="outlined"
          placeholder="Escribe un mensaje"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSend();
            }
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSend} sx={{ ml: 1 }}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;

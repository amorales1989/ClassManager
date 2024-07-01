import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function PermanentDrawer() {
  const list = (
    <>
      <h2 style={{ display: 'flex', justifyContent: 'center',color: '#ffffff' }}>Class-Manager</h2>
      <Box
        sx={{
          width: 250,
          paddingTop: 1, // Adjust spacing between logo and list
          backgroundColor: '#121621', // Light gray background color
          color: '#ffffff', // Text color white
        }}
        role="presentation"
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5 }}>
          <img src="/vite.svg" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>

        {/* List */}
        <List>
          {['Dashboard', 'Comunicación', 'Asistencias', 'Calificaciones', 'Boletines', 'Informes', 'Tareas'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: '#ffffff'}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{backgroundColor: '#ffffff'}} />
        <List>
          {['Perfil', 'Configuración', 'Cerrar sesión'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color: '#ffffff'}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: '#121621', // Light gray background color
        },
      }}
    >
      {list}
    </Drawer>
  );
}

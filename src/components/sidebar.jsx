import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SendIcon from '@mui/icons-material/Send';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ClassIcon from '@mui/icons-material/Class';
import NavBar from './Navbar';

export default function PermanentDrawer() {
  const list = (
    <>
    
      <h2 style={{ display: 'flex', justifyContent: 'center', color: '#ffffff' }}>Class-Manager</h2>
      <Box
        sx={{
          width: 250,
          paddingTop: 1,
          backgroundColor: '#121621',
          color: '#ffffff',
        }}
        role="presentation"
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 5, background: 'white' }}>
          <img src="/logoSchool.png" alt="Logo" style={{ maxWidth: '50%', height: 'auto' }} />
        </Box>
        <List>
          {[
            { text: 'Tablero', icon: <BackupTableIcon />, link: '/tablero' },
            { text: 'Asistencias', icon: <AssignmentTurnedInIcon />, link: '/asistencias' },
            { text: 'Calificaciones', icon: <TextSnippetIcon />, link: '/calificaciones' },
            { text: 'Informes', icon: <AssessmentIcon />, link: '/informes' },
            { text: 'Tareas', icon: <FormatListBulletedIcon />, link: '/tareas' },
            { text: 'Maestros', icon: <PeopleAltIcon />, link: '/maestros' },
            { text: 'Cursos', icon: <ClassIcon />, link: '/cursos' },
            { text: 'Contacto', icon: <SendIcon />, link: '/contacto' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.link}>
                <ListItemIcon sx={{ color: '#ffffff' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: '#ffffff' }} />
        <List>
          {[
            { text: 'Perfil', icon: <PersonIcon />, link: '/perfil' },
            { text: 'Configuración', icon: <SettingsIcon />, link: '/settings' },
            { text: 'Cerrar sesión', icon: <LogoutIcon />, link: '/' },
          ].map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.link}>
                <ListItemIcon sx={{ color: '#ffffff' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
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
          backgroundColor: '#121621',
        },
      }}
    >
      <NavBar/>
      {list}
    </Drawer>
  );
}

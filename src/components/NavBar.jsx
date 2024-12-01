import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { teal,blueGrey } from '@mui/material/colors';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor:blueGrey[900]}}>
      <AppBar position="fixed" >
        <Toolbar sx={{backgroundColor:blueGrey[900]}}>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           55 Cash (מר גזבר)
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

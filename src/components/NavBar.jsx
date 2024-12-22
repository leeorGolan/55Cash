import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { teal,blueGrey,lightBlue } from '@mui/material/colors';
import Popover from '@mui/material/Popover';


export default function ButtonAppBar({clearList}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ flexGrow: 1, backgroundColor:lightBlue[900]}}>
      <AppBar position="fixed" >
        <Toolbar sx={{backgroundColor:'#012030'}}>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           55 Cash (מר גזבר)
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon/>
             </IconButton >
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Button variant='contained' onClick={clearList} sx={{ backgroundColor:'#45C4B0' ,color:'#012030'}}>ג'דיד</Button>
          </Popover>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

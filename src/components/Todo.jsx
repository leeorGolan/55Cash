import React from 'react'
import {Box,TextField,Button,List,Typography,Stack,IconButton} from '@mui/material/'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { teal,deepOrange,green,lightGreen,blueGrey,red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';

function Todo({task,toggleComplete,deleteTodo,editTodo,num,plus,minus}) {

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
    <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:'#DAFDBA',
          width:'100%',
         
          paddingRight:0,
          paddingLeft:0
        }} >


      {/* <Box display={'flex'} flexDirection={'row'} sx={{backgroundColor:'red'}}> */}
    
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}  >


        <Box sx={ {marginLeft:2}}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
          
             <MoreVertIcon  sx={{color:'#012030'}} />
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
                <IconButton sx={{color:'#012030',backgroundColor:'#DAFDBA',borderRadius:0}} variant='contained' onClick={() => deleteTodo(task.id)}><DeleteIcon/></IconButton> 

                     </Popover>

           </Box>



           <Box sx={ {backgroundColor:'' ,width:120}} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton sx={{color:'#012030'}} variant='contained' onClick= {() => minus(task.id)}><RemoveIcon/></IconButton>

            <Typography color= {task.num < 0 ? red[800]:'green'}  variant='h4'>{task.num}</Typography>

            <IconButton sx={{color:'#012030'}} variant='contained' onClick= {() => plus(task.id)}><AddIcon/></IconButton>
            
            </Box>
            </Box>
           

           <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}  minWidth={150} sx={{backgroundColor:''}}>
            <Typography className='bubbles'  variant='h5' sx={ {marginRight:2 ,color: '#012030'}} 
            onClick={() => toggleComplete(task.id)}>{task.task}</Typography>
        </Box>
      {/* </Box> */}

{/* <Button variant='contained' 
      onClick={() => editTodo(task.id)}>edit</Button> */}

   </Stack>
  )
}

export default Todo


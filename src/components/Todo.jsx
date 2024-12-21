import React from 'react'
import {Box,TextField,Button,List,Typography,Stack,IconButton} from '@mui/material/'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { teal,deepOrange,green,lightGreen,blueGrey,red } from '@mui/material/colors';

function Todo({task,toggleComplete,deleteTodo,editTodo,num,plus,minus}) {

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
           <IconButton sx={{color:'#012030'}} variant='contained' onClick={() => deleteTodo(task.id)}><DeleteIcon/></IconButton> 
           </Box>
           <Box sx={ {backgroundColor:'' ,width:120}} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton sx={{color:'#012030'}} variant='contained' onClick= {() => minus(task.id)}><RemoveIcon/></IconButton>

            <Typography color= {task.num < 0 ? red[800]:'green'}  variant='h4'>{task.num}</Typography>

            <IconButton sx={{color:'#012030'}} variant='contained' onClick= {() => plus(task.id)}><AddIcon/></IconButton>
            
            </Box>
            </Box>
           

           <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}  minWidth={150} sx={{backgroundColor:''}}>
            <Typography className='rubik-Heb'  variant='h5' sx={ {marginRight:2 ,color: '#012030'}} 
            onClick={() => toggleComplete(task.id)}>{task.task}</Typography>
        </Box>
      {/* </Box> */}

{/* <Button variant='contained' 
      onClick={() => editTodo(task.id)}>edit</Button> */}

   </Stack>
  )
}

export default Todo


import React from 'react'
import {Box,TextField,Button,List,Typography,Stack,IconButton} from '@mui/material/'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { teal,deepOrange,green,lightGreen,blueGrey } from '@mui/material/colors';

function Todo({task,toggleComplete,deleteTodo,editTodo,num,plus,minus}) {

  return (
    <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:blueGrey[300],
          width:'100%',
         
          paddingRight:0,
          paddingLeft:0
        }} >


      {/* <Box display={'flex'} flexDirection={'row'} sx={{backgroundColor:'red'}}> */}
    
        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}  >
        <Box sx={ {marginLeft:2}}>
           <IconButton sx={{color:teal[800]}} variant='contained' onClick={() => deleteTodo(task.id)}><DeleteIcon/></IconButton> 
           </Box>
            <IconButton sx={{color:teal[800]}} variant='contained' onClick= {() => minus(task.id)}><RemoveIcon/></IconButton>

            <Typography sx={{color:teal[800]}}  variant='h4'>{task.num}</Typography>

            <IconButton sx={{color:teal[800]}} variant='contained' onClick= {() => plus(task.id)}><AddIcon/></IconButton>
            </Box>
           

           <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'flex-end'}  minWidth={150} sx={{backgroundColor:''}}>
            <Typography  variant='h5' sx={ {marginRight:2 ,color: teal[800]}} 
            onClick={() => toggleComplete(task.id)}>{task.task}</Typography>
        </Box>
      {/* </Box> */}

{/* <Button variant='contained' 
      onClick={() => editTodo(task.id)}>edit</Button> */}

   </Stack>
  )
}

export default Todo


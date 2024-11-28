import React from 'react'
import {Box,TextField,Button,List,Typography,Stack,IconButton} from '@mui/material/'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
function Todo({task,toggleComplete,deleteTodo,editTodo,num,plus,minus}) {

  return (
    <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:'',
          width:'100%',
         
          paddingRight:2,
          paddingLeft:2
        }} >


      {/* <Box display={'flex'} flexDirection={'row'} sx={{backgroundColor:'red'}}> */}
      <Box minWidth={150} sx={{backgroundColor:''}}>
            <Typography variant='h5' sx={ {color:`${task.completed ? 'red':""}`}} 
            onClick={() => toggleComplete(task.id)}>{task.task}</Typography>
 </Box>
 <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
            <IconButton variant='contained' onClick= {() => minus(task.id)}><RemoveIcon/></IconButton>

            <Typography variant='h4'>{task.num}</Typography>

            <IconButton variant='contained' onClick= {() => plus(task.id)}><AddIcon/></IconButton>
            </Box>
            <Box>
           <IconButton variant='contained' onClick={() => deleteTodo(task.id)}><DeleteIcon/></IconButton> 
           </Box>
      {/* </Box> */}

{/* <Button variant='contained' 
      onClick={() => editTodo(task.id)}>edit</Button> */}

   </Stack>
  )
}

export default Todo


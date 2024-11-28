import React from 'react'
import {Box,TextField,Button,List,Typography} from '@mui/material/'

function Todo({task,toggleComplete,deleteTodo,editTodo,num,plus,minus}) {

  return (
    <Box display='flex' flexDirection='row'>

      <Typography sx={ {color:`${task.completed ? 'red':""}`}} 
      onClick={() => toggleComplete(task.id)}>{task.task}</Typography>


      <Button variant='contained' onClick= {() => minus(task.id)}>minus</Button>
      <Typography>{task.num}</Typography>
      <Button variant='contained' onClick= {() => plus(task.id)}>plus</Button>

      <Button variant='contained' 
      onClick={() => deleteTodo(task.id)}>delete</Button>



{/* <Button variant='contained' 
      onClick={() => editTodo(task.id)}>edit</Button> */}

    </Box>
  )
}

export default Todo


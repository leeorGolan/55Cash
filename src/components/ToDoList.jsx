import React ,{useState} from 'react'
import {TextField,Button,List,Typography,Box,IconButton} from '@mui/material/'
import NewItem from './NewItem'
import AddIcon from '@mui/icons-material/Add';
import { teal,deepOrange,green,lightGreen,blueGrey } from '@mui/material/colors';


function TodoList({addTodo}) {


const [value,setValue] = useState("")

const handleSubmit = (e) =>{
  e.preventDefault()
  addTodo(value)
  setValue("")
}

  return (
    <Box position="static" sx={{backgroundColor:blueGrey[800],mt:7,width:'100%',height:80,
      display:'flex',
      flexDirection:'row',
      justifyContent: "space-between",
      alignItems: "center",
    }}>
       
       <TextField sx={{ml:2 ,color:'white'}} onChange = {(event) => setValue(event.target.value)} value={value}/>
       
      <Button  sx={{mr:1,backgroundColor:teal[800]}} variant='contained'
      onClick={handleSubmit}> <AddIcon sx={{color:'white',width:40,height:40}} /> </Button>
    </Box>
  )
}

export default TodoList
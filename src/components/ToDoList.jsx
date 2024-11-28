import React ,{useState} from 'react'
import {TextField,Button,List,Typography,Box,IconButton} from '@mui/material/'
import NewItem from './NewItem'
import AddIcon from '@mui/icons-material/Add';


function TodoList({addTodo}) {


const [value,setValue] = useState("")

const handleSubmit = (e) =>{
  e.preventDefault()
  addTodo(value)
  
  setValue("")
}

  return (
    <Box position="static" sx={{backgroundColor:'brown',mt:7,width:'100%',height:80,
      display:'flex',
      flexDirection:'row',
      justifyContent: "space-between",
      alignItems: "center",
    }}  >
       
       <TextField sx={{ml:2}} onChange = {(event) => setValue(event.target.value)}
       value={value}
        />
       
      <Button  sx={{mr:1}} variant='contained'
      onClick={handleSubmit}> <AddIcon sx={{color:'white',width:40,height:40}} /> </Button>
    </Box>
  )
}

export default TodoList
import React from 'react'
import {Button,List,ListItem, Typography,IconButton} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function NewItem({newTask,tasks,props,itemName,num,minus,plus}) {
  return (
    <div>
        <ListItem >
    <Typography>{itemName}</Typography>
    <IconButton onClick={plus}><AddIcon/></IconButton>
    <Typography>{num}</Typography>
    <IconButton onClick={minus}  ><RemoveIcon/></IconButton>
</ListItem>
    </div>
  )
}

export default NewItem
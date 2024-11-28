import React ,{useState} from 'react'
import ToDoList from './ToDoList'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import { Typography,Box ,Stack} from '@mui/material'
import TotalModal from './TotalModal'
import NavBar from './NavBar'
import FormatShapesIcon from '@mui/icons-material/FormatShapes';
uuidv4()


function TodoWrapper() {

 

  const [todos,setTodos] = useState([])

  const [totalNum,setTotalNum] = useState(0)

  const addTodo = todo =>{
    setTodos([...todos,
      {
      id:uuidv4(),
      task:todo,
      completed:false,
      isEditing:false,
      num:0
  
    }])
    console.log(todos)
  }

const plus = id =>{
   
   todos.forEach(t => {
    if(t.id === id){
      t.num = t.num+1
    }})
   setTodos([...todos])
  }


  const minus = id =>{
   
    todos.forEach(t => {
     if(t.id === id){
       t.num = t.num-1
     }})
    setTodos([...todos])
   }

   let sum = 0;  
//  const allNumbers = () => {
  // todos.forEach(t => {
    // todos.forEach( n.num => {sum += n.num})
    
  //}
  // )
   //setTodos([...todos])
   const allNumbers = () => {

    todos.forEach( t => {
      
    sum += Math.abs(t.num);
  })
  setTotalNum(sum)
  console.log(sum)
   }



  const toggleComplete =id =>{
    setTodos(todos.map(todo =>todo.id === id ? {...todo,completed:!todo.completed}: todo ))
  }
  const deleteTodo =id =>{
    setTodos(todos.filter(todo => todo.id !== id  ))
  }
  // const editTodo =id =>{
  //   setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing } : todo  ))
  // }
  return (
    <>
    <NavBar/>
    {/* <Box sx={{backgroundColor:'pink',minHeight:'100%',height:'100vh',width:'100vw'}}>
      <Typography>vbcvb</Typography>
      </Box> */}
 <Box
 
 
  sx={{
    display:'flex',
    flexDirection:'column',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor:'orange',
    height:'100vh',
    width:'100vw',
    mt:0
  }}
>

     
      <ToDoList addTodo={addTodo} />

      {todos.map((todo,index) => (
        <Todo 
            task={todo} 
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            // editTodo={editTodo}
            plus={plus}
            minus={minus}
            />
      ))
      }
     
    <TotalModal player={ todos.map((todo,index) => (<Typography key={index}>{todo.task}</Typography>))}
    numba={ todos.map((todo,index) => (<Typography key={index}>{todo.num}</Typography>))}
    allNumbers={allNumbers}
    totalos={totalNum}
    />
  
    </Box> 
    </>
  )
}

export default TodoWrapper
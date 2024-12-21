import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { Typography, Box, Stack } from "@mui/material";
import TotalModal from "./TotalModal";
import NavBar from "./NavBar";
import FormatShapesIcon from "@mui/icons-material/FormatShapes";
import { teal, deepOrange,green,blueGrey,red} from "@mui/material/colors";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("MY_TODOS") ?? '[]'));

  const [totalNum, setTotalNum] = useState(0);
  const [zerolNum, setZeroNum] = useState(0);

  useEffect(() => {
    localStorage.setItem("MY_TODOS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        num: 0,
        // zeroNum:0
      },
    ]);
    console.log(todos);
  };

  const plus = (id) => {
    todos.forEach((t) => {
      if (t.id === id) {
        t.num = t.num + 1;
      }
    });

    setTodos([...todos]);
  };

  const minus = (id) => {
    todos.forEach((t) => {
      if (t.id === id) {
        t.num = t.num - 1;
      }
    });
    setTodos([...todos]);
  };

  let sum = 0;
  let zero = 0
   const zeroNumbers = () => {
  // todos.forEach(t => {
  todos.forEach( (n)=> {zero += n.num})
  setZeroNum(zero)
  console.log(zero);
  }
  

  
  //setTodos([...todos])



  const allNumbers = () => {
    todos.forEach((t) => {
      sum += Math.abs(t.num);
    });
    setTotalNum(sum);
    console.log(sum);
  };



  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // const editTodo =id =>{
  //   setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing } : todo  ))
  // }

const clearList  = () =>{
  setTodos([])
}


  return (
    <>
      <NavBar clearList={clearList} />
      {/* <Box sx={{backgroundColor:'pink',minHeight:'100%',height:'100vh',width:'100vw'}}>
      <Typography>vbcvb</Typography>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor:'#45C4B0',
          height: "90vh",
          width: "100vw",
          mt: 5,
        }}
      >
        <Stack
          width={"100%"}
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ToDoList addTodo={addTodo} />

          {todos.map((todo, index) => (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              // editTodo={editTodo}
              plus={plus}
              minus={minus}
            />
          ))}
        </Stack>

        <TotalModal
          player={todos.map((todo, index) => (
            <Typography variant='h5' sx={{ color:'#012030'}}  key={index}>{todo.task}</Typography>
          ))}
          numba={todos.map((todo, index) => (
            <Typography  variant='h5'  color= {todo.num < 0 ? red[800]:'green'} key={index}>{todo.num}</Typography>
          ))}
          allNumbers={allNumbers}
          zeroNumbers={zeroNumbers}
          totalos={totalNum}
          totalZero= {zerolNum}
        />
      </Box>
    </>
  );
}

export default TodoWrapper;

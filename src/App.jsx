import { useState } from 'react'
import Typography from '@mui/material/Typography'
import './App.css'
import TodoWrapper from './components/TodoWrapper'

import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: [
    "Rubik"
      
    ].join(','),
  },});




function App() {
  

  return (
    <>
<ThemeProvider theme={theme}>
      <TodoWrapper/>
      </ThemeProvider>
    </>
  )
}

export default App

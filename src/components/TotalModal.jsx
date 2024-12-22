import * as React from 'react';
import {Box,styled,Stack} from '@mui/material'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { teal,deepOrange,green,blueGrey } from '@mui/material/colors';
import DoneIcon from '@mui/icons-material/Done';
import GppBadIcon from '@mui/icons-material/GppBad';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'80%',
  bgcolor: '#45C4B0',
  //border: '2px solid #000',
  boxShadow: 24,
  color:'white',
  p: 2,
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
  alignItems:'center'
};

const BypassButton = styled(Button)(({ theme }) => ({
  //background: theme.palette.mode === 'dark' ? '#282A2C' : theme.palette.primary.main,
  height: 34,
  width:220,
  borderRadius:10,
  margin:8,
  backgroundColor:'#9AEBA3',
  color:'#012030',
  fontWeight:'bold'
 
  //border:10
 }));

export default function BasicModal({player,numba,totalos,allNumbers,zeroNumbers ,totalZero}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  //  const zeroNumReturn =() =>{

    // return(
    // if( zeroNum === 0 ){
    //   <DoneIcon sx={{color:'green'}}/>
    // }else{
    // <GppBadIcon sx={{color:'red'}} />)
    // }}  
    let tester =0
  return (
    <div>
      <BypassButton  sx={{mb:2 }}  variant="contained" onClick={() => { handleOpen(), allNumbers() ,zeroNumbers()}}>
        Total
      </BypassButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4"  sx={{ color:'#012030'}}>
            Total
          </Typography>
         
          <Stack sx={{display:"flex",flexDirection:"row" , justifyContent:'space-between' , backgroundColor:'',width:'100%',height:'80%'}}>
         
          {/* <Typography id="modal-modal-title" variant="h5"  sx={{ color:teal[900]}}> */}
       <Box>
              {player}
            {/* </Typography> */}
            
            </Box>
            <Box> 
            {/* <Typography id="modal-modal-title" variant="h4"  sx={{ color:teal[900]}}> */}
              {numba}
            {/* </Typography> */}
            </Box>
          </Stack>
          {/* <Typography variant='h4'  sx={{ mt: 2 ,color:teal[900]}} > */}
        
             {totalZero === 0 ?   <img src="/V2.gif" alt="image"  style={{width:260,height:160}}/> :  <img src="/X2.gif" alt="image"  style={{width:260,height:160}}/> }
            {/* </Typography> */}
           
          <Typography variant='h5'  sx={{ mt: 2 ,color:'#012030'}} >
            סך הכל ריביי {totalos}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}

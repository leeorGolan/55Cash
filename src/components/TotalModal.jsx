import * as React from 'react';
import {Box,styled,Stack} from '@mui/material'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { teal,deepOrange,green,blueGrey } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'80%',
  bgcolor: blueGrey[400],
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
  backgroundColor: teal[700],
 
  //border:10
 }));


export default function BasicModal({player,numba,totalos,allNumbers}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <BypassButton  sx={{mb:2 }}  variant="contained" onClick={() => { handleOpen(), allNumbers()}}>
        Total
      </BypassButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4"  sx={{ color:teal[900]}}>
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

          <Typography variant='h4'  sx={{ mt: 2 ,color:teal[900]}} >
            סך הכל ריביי {totalos}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}

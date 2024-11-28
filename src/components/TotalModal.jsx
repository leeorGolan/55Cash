import * as React from 'react';
import {Box,styled} from '@mui/material'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { teal,deepOrange,green } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height:'80%',
  bgcolor: teal[400],
  border: '2px solid #000',
  boxShadow: 24,
  color:'white',
  p: 4,
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
          <Typography id="modal-modal-title" variant="h4" component="h2" >
            Total
          </Typography>

          <Box sx={{display:"flex",flexDirection:"row" , justifyContent:'space-between', backgroundColor:'',width:'100%'}}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {player}
            </Typography>

            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {numba}
            </Typography>
          </Box>

          <Typography  sx={{ mt: 2 }} >
            סך הכל קניה  {totalos}
            </Typography>
        </Box>
      </Modal>
    </div>
  );
}

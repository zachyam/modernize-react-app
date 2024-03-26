import React from 'react';
import { Typography, Box, Button, Modal, Fade, Backdrop, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddQuoteModal = ({ open, onClose, onSave }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Add a new quote
          </Typography>
          <TextField
            id="standard-basic"
            label="Contractor"
            variant="standard"
            sx={{ mt: 2, display: 'block' }}
          />
          <TextField
            id="standard-basic"
            label="USD"
            variant="standard"
            sx={{ mt: 2, display: 'block' }}
          />

          <Button variant="contained" sx={{ mt: 2 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-arrow-up"
              width="32"
              height="32"
              viewBox="0 0 30 25"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M12 8l-4 4" />
              <path d="M12 8v8" />
              <path d="M16 12l-4 -4" />
            </svg>
            Upload quote
          </Button>
          <div sx={{ display: 'inline' }}>
            <Button variant="contained" color="success" sx={{ mr: 2, mt: 2 }} onClick={onSave}>
              Save
            </Button>
            <Button onClick={onClose} variant="contained" color="error" sx={{ mr: 2, mt: 2 }}>
              Cancel
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AddQuoteModal;

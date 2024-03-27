import React, { useState } from 'react';
import { Typography, Menu, MenuItem, Fade, Modal, Backdrop, Button } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { DeleteQuoteModal } from './Modal';
import { handleQuoteDownload } from '../quotesDownload';

export const QuoteRowOptionsMenu = ({ quote }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDelete, setOpenDeleteModal] = useState(false);
  const { removeQuote } = useQuotesContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteClick = () => {
    setOpenDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    removeQuote(quote.id);
    setOpenDeleteModal(false);
    handleClose();
  };
  return (
    <>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem
          onClick={() => {
            handleEdit(quote);
            handleClose();
          }}
        >
          Edit
        </MenuItem> */}
        <MenuItem
          onClick={() => {
            handleQuoteDownload(quote);
            handleClose();
          }}
        >
          Download
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
      </Menu>

      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <DeleteQuoteModal
        open={openDelete}
        onClose={() => setOpenDeleteModal(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
    </>
  );
};

import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button,
    Modal,
    Fade,
    Backdrop,
    TextField
} from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';

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

const products = [
    {
        contractor: "Sunil Joshi",
        status: "Unapproved",
        pbg: "error.main",
        quote_amount: "3.9",
    },
    {
        contractor: "Andrew McDownland",
        status: "Unapproved",
        pbg: "error.main",
        quote_amount: "24.5",
    },
    {
        contractor: "Christopher Jamil",
        status: "Unapproved",
        pbg: "error.main",
        quote_amount: "12.8",
    },
    {
        contractor: "Nirav Joshi",
        status: "Approved",
        pbg: "success.main",
        quote_amount: "2.4",
    },
];


function showAddModal() {
    console.log("test")
}

const Roof = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
        <DashboardCard title="Quotes">
            <Button onClick={handleOpen} variant="contained">Add Quote</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
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
                        <TextField id="standard-basic" label="Contractor" variant="standard" sx={{ mt: 2, display: 'block' }}/>
                        <TextField id="standard-basic" label="USD" variant="standard" sx={{ mt: 2, display: 'block' }}/>
                        
                        <Button variant="contained" sx={{ mt: 2 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-up" width="32" height="32" viewBox="0 0 30 25" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 8l-4 4" />
                        <path d="M12 8v8" />
                        <path d="M16 12l-4 -4" />
                        </svg>
                            Upload quote
                        </Button>
                        <div sx={{ display: 'inline' }} >
                            <Button variant="contained" color="success" sx={{ mr: 2, mt: 2}}>
                                Save
                            </Button>
                            <Button onClick={handleClose} variant="contained" color="error" sx={{ mr: 2, mt: 2 }}>
                                Cancel
                            </Button>
                        </div>
                    </Box>
                </Fade>
            </Modal>


            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>

                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Contractor
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Quote Amount
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Download quote
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.contractor}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.status}
                                    ></Chip>
                                </TableCell>
                                <TableCell>
                                    <Typography variant="h6">${product.quote_amount}k</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Button color="info" variant="contained">Approve</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default Roof;

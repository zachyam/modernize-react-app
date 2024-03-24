import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';

const completed = [
    {
        category: "Roofing",
        contractor: "Sunil Joshi",
        paid: "Paid",
        paid_bg: "success.main",
        invoice_uploaded: "Not Uploaded",
        invoice_bg: "error.main",
        amount: "3.9",
    },
    {
        category: "Painting",
        contractor: "Andrew McDownland",
        paid: "Not Paid",
        paid_bg: "error.main",
        invoice_uploaded: "Not Uploaded",
        invoice_bg: "error.main",
        amount: "24.5",
    }
];


const Completed = () => {
    return (
        <DashboardCard title="Completed">
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
                                    Category
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Contractor
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Amount
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Paid
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Invoice Uploaded
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {completed.map((product) => (
                            <TableRow key={product.name}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.category}
                                    </Typography>
                                </TableCell>
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
                                    <Typography variant="h6">${product.amount}k</Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.paid_bg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.paid}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.invoice_bg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.invoice_uploaded}
                                    ></Chip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default Completed;

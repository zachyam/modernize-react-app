import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip,
    Button
} from '@mui/material';
import DashboardCard from '../../components/shared/DashboardCard';

const all = [
    {
        category: "Kitchen",
        contractor: "Michelle Huang",
        date_start: "12/3/24",
        date_end: "12/10/24",
        status_bg: "error.main",
        status: "Not Started",
    },
    {
        category: "Bathroom",
        contractor: "Zach Yam",
        date_start: "10/5/24",
        date_end: "12/10/24",
        status_bg: "success.main",
        status: "Started",
    }
];


const Summary = () => {
    return (
        <DashboardCard title="Summary">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                {/* <Table
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
                                    Date Start
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Projected Date End
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Status
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {all.map((product) => (
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
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.date_start}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.date_end}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.status_bg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.status}
                                    ></Chip>
                                </TableCell>
                                <TableCell align="right">
                                    <Button color="info" variant="contained">Mark Complete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table> */}
            </Box>
        </DashboardCard>
    );
};

export default Summary;

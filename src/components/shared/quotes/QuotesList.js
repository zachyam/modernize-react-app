import React from 'react';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from '@mui/material';
import DashboardCard from '../DashboardCard';
import { QUOTE_STATUS } from 'src/context/QuotesContext';

export const quoteWithPBG = (q) => {
  const pbg =
    q.status == QUOTE_STATUS.APPROVED
      ? 'success.main'
      : q.status == QUOTE_STATUS.UNAPPROVED
      ? 'error.main'
      : '';
  return { ...q, pbg };
};

const QuotesList = ({ quotes, title, onAddQuote, onApproveQuote }) => {
  return (
    <DashboardCard title={title}>
      <Button onClick={onAddQuote} variant="contained">
        Add Quote
      </Button>

      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
            mt: 2,
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
            {quotes.map(quoteWithPBG).map((quote, i) => (
              <TableRow key={`${i}-${quote.contractor}`}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: '500',
                    }}
                  >
                    {quote.contractor}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: '4px',
                      backgroundColor: quote.pbg,
                      color: '#fff',
                    }}
                    size="small"
                    label={quote.status}
                  ></Chip>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">${quote.quote_amount}k</Typography>
                </TableCell>
                <TableCell align="right">
                  <Button color="info" variant="contained" onClick={() => onApproveQuote(quote)}>
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default QuotesList;

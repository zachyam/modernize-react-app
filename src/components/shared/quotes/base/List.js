import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from '@mui/material';
import DashboardCard from '../../DashboardCard';
import { QUOTE_STATUS } from 'src/context/Quotes/defs';
import { formatThousands } from 'src/utils/amount';
import { Box, Tooltip } from '@mui/material';
import { QuoteRowOptionsMenu } from './RowOptionMenu';
export const quoteStatusLabelStyle = (q) => {
  const pbg =
    q.status == QUOTE_STATUS.APPROVED
      ? 'success.main'
      : q.status == QUOTE_STATUS.UNAPPROVED
      ? 'error.main'
      : q.status == QUOTE_STATUS.SCHEDULED_NOT_STARTED
      ? 'secondary.main'
      : q.status == QUOTE_STATUS.SCHEDULED_STARTED
      ? 'success.main'
      : '';
  return { ...q, pbg };
};

const fieldToListLabel = (f) => {
  // TODO in depth
  const labelsMap = {
    quote_type: 'Category',
  };
  return labelsMap[f];
};

const BaseQuotesList = ({ quotes, title, onAddQuoteModal, actionBtnRenderer, renderFields }) => {
  return (
    <DashboardCard title={title}>
      {onAddQuoteModal != undefined && (
        <Button onClick={onAddQuoteModal} variant="contained">
          Add Quote
        </Button>
      )}

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
              {renderFields?.length &&
                renderFields?.map((field) => {
                  return (
                    <TableCell key={`${field}-label`}>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {fieldToListLabel(field)}
                      </Typography>
                    </TableCell>
                  );
                })}
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
                  Attachments
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quotes.map(quoteStatusLabelStyle).map((quote, i) => (
              <TableRow key={`${i}-${quote.id}`}>
                {renderFields?.length &&
                  renderFields?.map((field) => {
                    return (
                      <TableCell key={`${field}-${quote.id}`}>
                        <Typography
                          sx={{
                            fontSize: '15px',
                            fontWeight: '500',
                          }}
                        >
                          {quote[field]}
                        </Typography>
                      </TableCell>
                    );
                  })}
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
                  <Typography variant="h6">${formatThousands(quote.quote_amount)}k</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">
                    {quote.files.length > 0 ? quote.files.length : '-'}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Box flex>
                    {actionBtnRenderer(quote)}
                    <QuoteRowOptionsMenu quote={quote} />
                    {/* <Tooltip
                      arrow
                      children={
                        <Box
                          sx={{
                            flexDirection: 'column',
                            bgcolor: 'white',
                            color: 'black',
                          }}
                        >
                          <Button onClick={() => handleEdit(quote)}>Edit</Button>
                          <Button onClick={() => handleDownload(quote)}>Download</Button>
                        </Box>
                      }
                    >
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </Tooltip> */}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default BaseQuotesList;

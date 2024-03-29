import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { QUOTE_BASE_STATUS, QUOTE_PIPELINE_STATUS, QUOTE_TYPE } from 'src/context/Quotes/defs';
import { isCompletedQuote, isScheduledQuote } from 'src/context/Quotes/selectors';
import BaseQuotesList from '../../components/shared/quotes/base/List';
import AddQuoteModal from '../../components/shared/quotes/base/Modal';
import { Button } from '@mui/material';
import React from 'react';
import DashboardCard from '../../components/shared/DashboardCard';
import { QUOTE_STATUS } from 'src/context/Quotes/defs';
import { isBaseQuote } from 'src/context/Quotes/selectors';
import { isApprovedNotCompletedQuote } from 'src/context/Quotes/selectors';

const Completed = () => {
  const { quotes, editQuote } = useQuotesContext();
  const products = quotes.filter(isCompletedQuote);
  const handlePaid = (q) => {
    editQuote(q.id, { ...q, status: QUOTE_PIPELINE_STATUS.COMPLETE_PAID });
  };
  const handleNotPaid = (q) => {
    editQuote(q.id, { ...q, status: QUOTE_PIPELINE_STATUS.COMPLETE_NOT_PAID });
  };
  const handleNotCompleted = (q) => {
    editQuote(q.id, { ...q, status: QUOTE_PIPELINE_STATUS.SCHEDULED_STARTED });
  };
  return (
    <>
      <BaseQuotesList
        quotes={products}
        title={'Completed'}
        renderFields={['quote_type']}
        actionBtnRenderer={(q) => {
          return q.status == QUOTE_PIPELINE_STATUS.COMPLETE_NOT_PAID ? (
            <>
              <Button color="error" variant="contained" onClick={(e) => handleNotCompleted(q)}>
                Incomplete
              </Button>
              <Button
                color="primary"
                variant="contained"
                sx={{ ml: 2 }}
                onClick={(e) => handlePaid(q)}
              >
                Paid
              </Button>
            </>
          ) : (
            <>
              <Button color="warning" variant="contained" onClick={(e) => handleNotPaid(q)}>
                Mark Not Paid
              </Button>
            </>
          );
        }}
      />
    </>
  );
};
export default Completed;

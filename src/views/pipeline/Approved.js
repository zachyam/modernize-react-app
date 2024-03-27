import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { QUOTE_BASE_STATUS, QUOTE_PIPELINE_STATUS, QUOTE_TYPE } from 'src/context/Quotes/defs';
import { isScheduledQuote } from 'src/context/Quotes/selectors';
import BaseQuotesList from '../../components/shared/quotes/base/List';
import AddQuoteModal from '../../components/shared/quotes/base/Modal';
import { Button } from '@mui/material';
import React from 'react';
import DashboardCard from '../../components/shared/DashboardCard';
import { QUOTE_STATUS } from 'src/context/Quotes/defs';
import { isBaseQuote } from 'src/context/Quotes/selectors';
import { isApprovedNotCompletedQuote } from 'src/context/Quotes/selectors';
const Approved = () => {
  const [open, setOpen] = React.useState(false);
  const { quotes, editQuote } = useQuotesContext();
  const products = quotes.filter(isApprovedNotCompletedQuote);
  const handleScheduleQ = (q) => {
    editQuote(q.id, { ...q, status: QUOTE_PIPELINE_STATUS.SCHEDULED_NOT_STARTED });
  };
  const handleUnscheduleQ = (q) => {
    editQuote(q.id, { ...q, status: QUOTE_BASE_STATUS.APPROVED });
  };
  return (
    <>
      <BaseQuotesList
        quotes={products}
        title={'Approved Quotes'}
        actionBtnRenderer={(q) => {
          return isScheduledQuote(q) ? (
            <Button color="primary" variant="contained" onClick={(e) => handleUnscheduleQ(q)}>
              Unschedule
            </Button>
          ) : (
            <Button color="success" variant="contained" onClick={(e) => handleScheduleQ(q)}>
              Schedule
            </Button>
          );
        }}
      />
    </>
  );
};

export default Approved;

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
const Summary = () => {
  const { quotes, editQuote } = useQuotesContext();
  const products = quotes.filter((q) => q.status != QUOTE_BASE_STATUS.UNAPPROVED);
  //   console.log(products);
  //   const handleCompleted = (q) => {
  //     editQuote(q.id, { ...q, status: QUOTE_PIPELINE_STATUS.COMPLETE_NOT_PAID });
  //   };
  //   const handleStarted = (q) => {
  //     editQuote(q.id, { ...q, status: QUOTE_PIPELINE_STATUS.SCHEDULED_STARTED });
  //   };
  return (
    <>
      <BaseQuotesList
        quotes={products}
        title={'Quotes Summary'}
        renderFields={['quote_type']}
        actionBtnRenderer={(q) => {
          //   return q.status == QUOTE_PIPELINE_STATUS.SCHEDULED_STARTED ? (
          //     <Button color="primary" variant="contained" onClick={(e) => handleCompleted(q)}>
          //       Mark As Complete
          //     </Button>
          //   ) : (
          //     <Button color="success" variant="contained" onClick={(e) => handleStarted(q)}>
          //       Start
          //     </Button>
          //   );
        }}
      />
    </>
  );
};
export default Summary;

import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { QUOTE_BASE_STATUS, QUOTE_PIPELINE_STATUS, QUOTE_TYPE } from 'src/context/Quotes/defs';
import { isScheduledQuote } from 'src/context/Quotes/selectors';
import BaseQuotesList from '../../components/shared/quotes/base/List';
import AddQuoteModal from '../../components/shared/quotes/base/Modal';
import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import DashboardCard from '../../components/shared/DashboardCard';
import { QUOTE_STATUS } from 'src/context/Quotes/defs';
import { isBaseQuote } from 'src/context/Quotes/selectors';
import { isApprovedNotCompletedQuote } from 'src/context/Quotes/selectors';
import { CircularProgress } from '@mui/material';
import { mergeQuotesAndFilesPDF } from 'src/components/shared/quotes/quotesDownload/mergePdf';

function triggerDownload(pdfBytes) {
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes-summary.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
const Summary = () => {
  const { quotes, editQuote } = useQuotesContext();
  const approvedQuotes = quotes.filter((q) => q.status != QUOTE_BASE_STATUS.UNAPPROVED);

  //   const [preparedSummary, setPreparedSummary] = useState();
  const [isPreparing, setIsPreparing] = useState(false);
  const startPreparingDownload = async () => {
    setIsPreparing(true);
    const pdfBytes = await mergeQuotesAndFilesPDF(approvedQuotes);
    // setPreparedSummary(pdfBytes)
    triggerDownload(pdfBytes);
    setIsPreparing(false);
  };
  return (
    <>
      <BaseQuotesList
        quotes={approvedQuotes}
        mainButton={
          <Button onClick={startPreparingDownload} variant="contained">
            {isPreparing ? (
              <>
                {'Preparing...'} <CircularProgress size={20} color="text" sx={{ ml: 2 }} />
              </>
            ) : (
              'Download Summary'
            )}
          </Button>
          // <IconButton color="info" variant="contained">
          //   <IconFidgetSpinner /> Preparing ...
          // </IconButton>
        }
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

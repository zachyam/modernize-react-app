import React from 'react';
import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { isBaseQuote, QUOTE_BASE_STATUS, QUOTE_TYPE } from 'src/context/Quotes/defs';
import BaseQuotesList from '../../components/shared/quotes/QuotesList';
import AddQuoteModal from '../../components/shared/quotes/QuoteModal';
import { Button } from '@mui/material';
const Kitchen = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { quotes } = useQuotesContext();
  const products = quotes.filter(isBaseQuote).filter((q) => q.quote_type == QUOTE_TYPE.KITCHEN);

  const handleApproveQuote = (quoteToApprove) => {
    const newQuotes = quotes.map((quote) => {
      if (quote.id === quoteToApprove.id) {
        return { ...quote, quote_status: QUOTE_BASE_STATUS.APPROVED };
      } else if (isBaseQuote(quote) && quote.quote_type === QUOTE_TYPE.KITCHEN) {
        return { ...quote, quote_status: QUOTE_BASE_STATUS.UNAPPROVED };
      }
      return quote;
    });

    setQuotes(newQuotes);
    console.log('Approve quote:', quoteToApprove);
  };
  const handleUnapproveQuote = (quoteToUnapprove) => {
    const newQuotes = quotes.map((quote) => {
      if (quote.id === quoteToUnapprove.id) {
        return { ...quote, quote_status: QUOTE_BASE_STATUS.UNAPPROVED };
      } else return quote;
    });

    setQuotes(newQuotes);
    console.log('Unapprove quote:', quoteToUnapprove);
  };
  console.log(333, { quotes, products });
  return (
    <>
      <BaseQuotesList
        quotes={products}
        title="Kitchen Quotes"
        onAddQuoteModal={handleOpen}
        actionBtnRenderer={(q) => {
          return q.quote_status == QUOTE_BASE_STATUS.UNAPPROVED ? (
            <Button color="error" variant="contained" onClick={(q) => handleApproveQuote(quote)}>
              Unapprove
            </Button>
          ) : (
            <Button color="info" variant="contained" onClick={(q) => handleUnapproveQuote(quote)}>
              Approve
            </Button>
          );
        }}
      />
      <AddQuoteModal open={open} onClose={handleClose} quoteType={QUOTE_TYPE.KITCHEN} />
    </>
  );
};

export default Kitchen;

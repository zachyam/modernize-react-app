import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { isBaseQuote, QUOTE_BASE_STATUS, QUOTE_TYPE } from 'src/context/Quotes/defs';
import BaseQuotesList from '../base/List';
import AddQuoteModal from '../Modal';
import { Button } from '@mui/material';

export const QuotesApproveList = ({ quoteType, quoteTypeLabel }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { quotes, setQuotes } = useQuotesContext();
  const products = quotes.filter(isBaseQuote).filter((q) => q.quote_type == QUOTE_TYPE.KITCHEN);

  const handleApproveQuote = (quoteToApprove) => {
    const newQuotes = products.map((quote) => {
      if (quote.id === quoteToApprove.id) {
        return { ...quote, status: QUOTE_BASE_STATUS.APPROVED };
      } else if (isBaseQuote(quote) && quote.quote_type === quoteType) {
        return { ...quote, status: QUOTE_BASE_STATUS.UNAPPROVED };
      }
      return quote;
    });

    setQuotes(newQuotes);
    console.log('Approve quote:', quoteToApprove);
  };
  const handleUnapproveQuote = (quoteToUnapprove) => {
    const newQuotes = quotes.map((quote) => {
      if (quote.id === quoteToUnapprove.id) {
        return { ...quote, status: QUOTE_BASE_STATUS.UNAPPROVED };
      } else return quote;
    });

    setQuotes(newQuotes);
    console.log('Unapprove quote:', quoteToUnapprove);
  };
  return (
    <>
      <BaseQuotesList
        quotes={products}
        title={quoteTypeLabel}
        onAddQuoteModal={handleOpen}
        actionBtnRenderer={(q) => {
          return q.status == QUOTE_BASE_STATUS.APPROVED ? (
            <Button color="error" variant="contained" onClick={(e) => handleUnapproveQuote(q)}>
              Unapprove
            </Button>
          ) : (
            <Button color="info" variant="contained" onClick={(e) => handleApproveQuote(q)}>
              Approve
            </Button>
          );
        }}
      />
      <AddQuoteModal open={open} onClose={handleClose} quoteType={quoteType} />
    </>
  );
};
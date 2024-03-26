import React from 'react';
import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { isBaseQuote, QUOTE_TYPE } from 'src/context/Quotes/defs';
import QuotesListPage from '../../components/shared/quotes/QuotesList';
import AddQuoteModal from '../../components/shared/quotes/AddQuoteModal';

const Roof = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { quotes } = useQuotesContext();
  const products = quotes.filter(isBaseQuote).filter((q) => q.quote_type == QUOTE_TYPE.ROOF);

  const handleAddQuote = () => {
    handleOpen();
  };

  const handleApproveQuote = (quote) => {
    console.log('Approve quote:', quote);
  };

  const handleSaveQuote = (q) => {
    console.log('Save new quote', q);
    handleClose();
  };

  return (
    <>
      <QuotesListPage
        quotes={products}
        title="Roof Quotes"
        onAddQuote={handleAddQuote}
        onApproveQuote={handleApproveQuote}
      />
      <AddQuoteModal open={open} onClose={handleClose} onSave={handleSaveQuote} />
    </>
  );
};

export default Roof;

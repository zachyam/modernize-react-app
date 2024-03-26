import React from 'react';
import { QUOTE_TYPES, useQuotesContext } from 'src/context/QuotesContext';
import QuotesListPage from '../../components/shared/quotes/QuotesList';
import AddQuoteModal from '../../components/shared/quotes/AddQuoteModal';

const Roof = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { quotes } = useQuotesContext();
  const products = quotes.filter((q) => q.quote_type == QUOTE_TYPES.ROOF);

  const handleAddQuote = () => {
    handleOpen();
  };

  const handleApproveQuote = (quote) => {
    console.log('Approve quote:', quote);
  };

  const handleSaveQuote = () => {
    console.log('Save new quote');
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

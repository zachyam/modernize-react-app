import React from 'react';
import { QUOTE_TYPES, useQuotesContext } from 'src/context/QuotesContext';
import QuotesListPage from '../../components/shared/quotes/QuotesList';
import AddQuoteModal from '../../components/shared/quotes/AddQuoteModal';

const MasterBathroom = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { quotes } = useQuotesContext();
  const products = quotes.filter((q) => q.quote_type == QUOTE_TYPES.BATHROOM);

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
        title="Master Bathroom Quotes"
        onAddQuote={handleAddQuote}
        onApproveQuote={handleApproveQuote}
      />
      <AddQuoteModal open={open} onClose={handleClose} onSave={handleSaveQuote} />
    </>
  );
};

export default MasterBathroom;

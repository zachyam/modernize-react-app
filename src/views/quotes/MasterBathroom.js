import React from 'react';
import { useQuotesContext } from 'src/context/Quotes/QuotesContext';
import { isBaseQuote, QUOTE_TYPE } from 'src/context/Quotes/defs';
import BaseQuotesList from '../../components/shared/quotes/QuotesList';
import AddQuoteModal from '../../components/shared/quotes/QuoteModal';

const MasterBathroom = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { quotes } = useQuotesContext();
  const products = quotes.filter(isBaseQuote).filter((q) => q.quote_type == QUOTE_TYPE.BATHROOM);

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
      <BaseQuotesList
        quotes={products}
        title="Master Bathroom Quotes"
        onAddQuoteModal={handleOpen}
        onApproveQuote={handleApproveQuote}
      />
      <AddQuoteModal open={open} onClose={handleClose} quoteType={QUOTE_TYPE.BATHROOM} />
    </>
  );
};

export default MasterBathroom;

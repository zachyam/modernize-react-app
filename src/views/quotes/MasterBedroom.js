import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';

const MasterBedroom = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.MASTERBEDROOM} quoteTypeLabel={'Master Bedroom Quotes'} />
);
export default MasterBedroom;

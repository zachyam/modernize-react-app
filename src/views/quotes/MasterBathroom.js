import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';

const MasterBathroom = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.KITCHEN} quoteTypeLabel={'Master Bathroom Quotes'} />
);
export default MasterBathroom;

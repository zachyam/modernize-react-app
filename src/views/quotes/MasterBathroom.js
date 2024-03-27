import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';

const MasterBathroom = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.BATHROOM} quoteTypeLabel={'Master Bathroom Quotes'} />
);
export default MasterBathroom;

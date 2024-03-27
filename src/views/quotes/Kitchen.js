import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';

const Kitchen = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.KITCHEN} quoteTypeLabel={'Kitchen quotes'} />
);
export default Kitchen;

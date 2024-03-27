import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';
const Kitchen = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.KITCHEN} quoteTypeLabel={'Kitchen quotes'} />
);
export default Kitchen;

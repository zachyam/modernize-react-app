import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';

const POOL = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.POOL} quoteTypeLabel={'Pool quotes'} />
);
export default POOL;

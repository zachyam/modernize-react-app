import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';

const Roof = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.ROOF} quoteTypeLabel={'Roof quotes'} />
);
export default Roof;

import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';

const Painting = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.PAINTING} quoteTypeLabel={'Painting quotes'} />
);
export default Painting;

import React from 'react';
import { QuotesApproveList } from 'src/components/shared/quotes/lists/QuoteApproveList';
import { QUOTE_TYPE } from 'src/context/Quotes/defs';

const LivingRoom = () => (
  <QuotesApproveList quoteType={QUOTE_TYPE.LIVINGROOM} quoteTypeLabel={'Living Room quotes'} />
);
export default LivingRoom;

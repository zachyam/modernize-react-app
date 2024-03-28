import { QUOTE_BASE_STATUS, QUOTE_PIPELINE_STATUS, QUOTE_TYPE } from './defs';

export const isBaseQuote = (q) => Object.values(QUOTE_BASE_STATUS).includes(q.status);
export const isPipelineQuote = (q) => Object.values(QUOTE_PIPELINE_STATUS).includes(q.status);
export const isScheduledQuote = (q) =>
  [QUOTE_PIPELINE_STATUS.SCHEDULED_NOT_STARTED, QUOTE_PIPELINE_STATUS.SCHEDULED_STARTED].includes(
    q.status,
  );
export const isCompletedQuote = (q) =>
  [QUOTE_PIPELINE_STATUS.COMPLETE_NOT_PAID, QUOTE_PIPELINE_STATUS.COMPLETE_PAID].includes(q.status);

export const isApprovedNotCompletedQuote = (q) => {
  return isScheduledQuote(q) || q.status == QUOTE_BASE_STATUS.APPROVED;
};

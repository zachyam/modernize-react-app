import { QUOTE_BASE_STATUS, QUOTE_PIPELINE_STATUS, QUOTE_TYPE } from './defs';

// type QuoteDef = {
//   id:string
//   contractor: string
//   status: QUOTE_BASE_STATUS | QUOTE_PIPELINE_STATUS
//   quote_type:QUOTE_TYPE
//   quote_amount:number
//   files?:{data:string//base64 encoded blobs, name:string}[];
// };

export const isBaseQuote = (q) => Object.values(QUOTE_BASE_STATUS).includes(q.status);
export const isPipelineQuote = (q) => Object.values(QUOTE_PIPELINE_STATUS).includes(q.status);
export const isScheduledQuote = (q) =>
  [QUOTE_PIPELINE_STATUS.SCHEDULED_NOT_STARTED, QUOTE_PIPELINE_STATUS.SCHEDULED_STARTED].includes(
    q.status,
  );

export const isApprovedNotCompletedQuote = (q) => {
  return isScheduledQuote(q) || q.status == QUOTE_BASE_STATUS.APPROVED;
};
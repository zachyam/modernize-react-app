export const QUOTE_TYPE = {
  KITCHEN: 'KITCHEN',
  ROOF: 'ROOF',
  BATHROOM: 'BATHROOM',
  ///...etc
};

export const QUOTE_BASE_STATUS = {
  APPROVED: 'Approved',
  UNAPPROVED: 'Unapproved',
};
export const QUOTE_PIPELINE_STATUS = {
  SCHEDULED_NOT_STARTED: 'Scheduled',
  SCHEDULED_STARTED: 'Started',
  COMPLETE_NOT_PAID: 'Not Paid',
  COMPLETE_PAID: 'Paid',
};

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

export const QUOTE_STATUS = { ...QUOTE_BASE_STATUS, ...QUOTE_PIPELINE_STATUS };

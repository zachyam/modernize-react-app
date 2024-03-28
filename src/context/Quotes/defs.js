// type QuoteDef = {
//   id:string
//   contractor: string
//   status: QUOTE_BASE_STATUS | QUOTE_PIPELINE_STATUS
//   quote_type:QUOTE_TYPE
//   quote_amount:number
//   files?:{data:string//base64 encoded blobs, name:string}[];
// };

export const QUOTE_TYPE = {
  KITCHEN: 'Kitchen',
  ROOF: 'Roof',
  BATHROOM: 'Bathroom',
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

export const QUOTE_STATUS = { ...QUOTE_BASE_STATUS, ...QUOTE_PIPELINE_STATUS };

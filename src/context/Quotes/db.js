import { set, get, del, entries, clear } from 'idb-keyval';

export const getQuotesFromIndexedDB = async () => {
  const quotes = await entries();
  return quotes
    ? new Map(
        quotes
          ?.filter((q) => q)
          .map(([id, q]) => {
            return id && q && [id, q];
          }),
      )
    : new Map();
};
export const addQuoteToIndexedDB = async (id, quote) => {
  await set(id, quote);
};

export const updateQuoteInIndexedDB = async (id, updatedQuote) => {
  await set(id, updatedQuote);
};

export const deleteQuoteFromIndexedDB = async (id) => {
  await del(id);
};

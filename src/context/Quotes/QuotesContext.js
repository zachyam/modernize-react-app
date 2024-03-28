import React, { createContext, useState, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';
import {
  getQuotesFromIndexedDB,
  addQuoteToIndexedDB,
  updateQuoteInIndexedDB,
  deleteQuoteFromIndexedDB,
} from './db';

const QuotesContext = createContext({
  quotes: [],
  setQuotes: (q) => {},
  createQuote: (q) => {},
  editQuote: (id, q) => {},
  removeQuote: (id) => {},
});

const QuotesContextProvider = ({ children }) => {
  const [quotesMap, setQuotesMap] = useState(new Map());
  useEffect(() => {
    getQuotesFromIndexedDB().then(setQuotesMap);
  }, []);

  const quotes = Array.from([...quotesMap.values()]); // Use spread operator to convert values to array

  // useEffect(() => {
  //   const updateQuotesInDB = async () => {
  //     await addQuoteToIndexedDB([...quotesMap.values()]);
  //   };
  //   updateQuotesInDB();
  // }, [quotesMap]);

  const setQuotes = (newQuotes) => {
    setQuotesMap(
      (currentQuotesMap) =>
        new Map([...currentQuotesMap, ...newQuotes.map((quote) => [quote.id, quote])]),
    );
  };

  const createQuote = async (quote) => {
    const id = nanoid();
    await addQuoteToIndexedDB(id, quote);
    setQuotesMap((currentQuotesMap) => new Map([...currentQuotesMap, [id, { ...quote, id }]]));
  };

  const editQuote = async (id, updatedQuote) => {
    await updateQuoteInIndexedDB(id, updatedQuote);
    setQuotesMap(
      (currentQuotesMap) =>
        new Map(
          [...currentQuotesMap].map(([quoteId, quote]) =>
            quoteId === id ? [quoteId, { ...quote, ...updatedQuote }] : [quoteId, quote],
          ),
        ),
    );
  };

  const removeQuote = async (id) => {
    await deleteQuoteFromIndexedDB(id);
    setQuotesMap(
      (currentQuotesMap) => new Map([...currentQuotesMap].filter(([quoteId]) => quoteId !== id)),
    );
  };

  return (
    <QuotesContext.Provider value={{ quotes, setQuotes, createQuote, editQuote, removeQuote }}>
      {children}
    </QuotesContext.Provider>
  );
};

const useQuotesContext = () => {
  return useContext(QuotesContext);
};

export { QuotesContext, QuotesContextProvider, useQuotesContext };

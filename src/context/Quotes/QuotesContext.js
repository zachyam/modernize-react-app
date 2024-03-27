import React, { createContext, useState, useContext, useEffect } from 'react';
import { nanoid } from 'nanoid';

const QuotesContext = createContext({
  quotes: [],
  setQuotes: (q) => {},
  createQuote: (q) => {},
  editQuote: (id, q) => {},
  removeQuote: (id) => {},
});
const LOCAL_STORAGE_KEY = 'quotes';
const QuotesContextProvider = ({ children }) => {
  const [quotesMap, setQuotesMap] = useState(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? new Map(JSON.parse(localData)) : new Map();
  });

  const quotes = Array.from(quotesMap.values());
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Array.from(quotesMap.entries())));
  }, [quotesMap]);
  const setQuotes = (newQuotes) => {
    setQuotesMap(
      (currentQuotesMap) =>
        new Map([...currentQuotesMap, ...newQuotes.map((quote) => [quote.id, quote])]),
    );
  };

  const createQuote = (quote) => {
    const id = nanoid();
    setQuotesMap((currentQuotesMap) => new Map([...currentQuotesMap, [id, { ...quote, id }]]));
    console.log(222, quote);
  };

  const editQuote = (id, updatedQuote) => {
    setQuotesMap(
      (currentQuotesMap) =>
        new Map(
          [...currentQuotesMap].map(([quoteId, quote]) =>
            quoteId === id ? [quoteId, { ...quote, ...updatedQuote }] : [quoteId, quote],
          ),
        ),
    );
  };

  const removeQuote = (id) => {
    setQuotesMap(
      (currentQuotesMap) => new Map([...currentQuotesMap].filter(([quoteId]) => quoteId !== id)),
    );
  };
  console.log({ quotesMap, quotes });

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

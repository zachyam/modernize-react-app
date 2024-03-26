import React, { createContext, useState, useContext } from 'react';
import { initialQuotes } from './initialQuotes';

const QuotesContext = createContext({
  quotes: [],
  setQuotes: (q) => {},
});

const QuotesContextProvider = ({ children }) => {
  const [quotes, setQuotes] = useState(initialQuotes);
  return <QuotesContext.Provider value={{ quotes, setQuotes }}>{children}</QuotesContext.Provider>;
};

const useQuotesContext = () => {
  return useContext(QuotesContext);
};

export { QuotesContext, QuotesContextProvider, useQuotesContext };

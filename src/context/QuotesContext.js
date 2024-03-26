import React, { createContext, useState, useContext } from 'react';

export const QUOTE_TYPES = {
  KITCHEN: 'KITCHEN',
  ROOF: 'ROOF',
  BATHROOM: 'BATHROOM',
  ///...etc
};

export const QUOTE_STATUS = {
  APPROVED: 'Approved',
  UNAPPROVED: 'Unapproved',
  //...etc
};

const initialQuotes = [
  {
    contractor: 'Sunil Joshi',
    status: QUOTE_STATUS.UNAPPROVED, // Use QUOTE_STATUS instead of pbg
    quote_amount: '3.9',
    quote_type: QUOTE_TYPES.BATHROOM,
  },
  {
    contractor: 'Andrew McDownland',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '24.5',
    quote_type: QUOTE_TYPES.BATHROOM,
  },
  {
    contractor: 'Christopher Jamil',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '12.8',
    quote_type: QUOTE_TYPES.BATHROOM,
  },
  {
    contractor: 'Nirav Joshi',
    status: QUOTE_STATUS.APPROVED,
    quote_amount: '2.4',
    quote_type: QUOTE_TYPES.BATHROOM,
  },

  {
    contractor: 'Maria Garcia',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '18.7',
    quote_type: QUOTE_TYPES.KITCHEN,
  },
  {
    contractor: 'David Lee',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '15.2',
    quote_type: QUOTE_TYPES.KITCHEN,
  },
  {
    contractor: 'Emma Rodriguez',
    status: QUOTE_STATUS.APPROVED,
    quote_amount: '21.9',
    quote_type: QUOTE_TYPES.KITCHEN,
  },
  {
    contractor: 'Omar Khan',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '32.1',
    quote_type: QUOTE_TYPES.KITCHEN,
  },
  {
    contractor: 'Sarah Jones',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '19.8',
    quote_type: QUOTE_TYPES.KITCHEN,
  },

  {
    contractor: 'Peter Wang',
    status: QUOTE_STATUS.APPROVED,
    quote_amount: '7.2',
    quote_type: QUOTE_TYPES.ROOF,
  },
  {
    contractor: 'Alice Miller',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '8.5',
    quote_type: QUOTE_TYPES.ROOF,
  },
  {
    contractor: 'Brian Davis',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '6.9',
    quote_type: QUOTE_TYPES.ROOF,
  },
  {
    contractor: 'Carlos Hernandez',
    status: QUOTE_STATUS.UNAPPROVED,
    quote_amount: '10.1',
    quote_type: QUOTE_TYPES.ROOF,
  },
  {
    contractor: 'Emily Clark',
    status: QUOTE_STATUS.APPROVED,
    quote_amount: '8.8',
    quote_type: QUOTE_TYPES.ROOF,
  },
];

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

import { QuotesContextProvider } from './Quotes/QuotesContext';
import { UserContextProvider } from './UserContext';

export const AppContextProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <QuotesContextProvider>{children}</QuotesContextProvider>
    </UserContextProvider>
  );
};

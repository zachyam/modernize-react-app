import { QuotesContextProvider } from './QuotesContext';
import { UserContextProvider } from './UserContext';

export const AppContextProvider = ({ children }) => {
  return (
    <UserContextProvider>
      <QuotesContextProvider>{children}</QuotesContextProvider>
    </UserContextProvider>
  );
};

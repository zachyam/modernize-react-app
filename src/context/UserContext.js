import React, { createContext } from 'react';

const hardcodedUser = { name: 'Hardcoded User', email: 'useruser@user.com', id: 'ugyZYGTsb' };
const UserContext = createContext(hardcodedUser);

const UserContextProvider = ({ children }) => {
  return <UserContext.Provider value={hardcodedUser}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserContextProvider, useUserContext };

import React, { createContext, useState, useContext, useEffect } from "react";
import { useQuery } from '@apollo/client';
import { getCurrentUserData } from '../queries/users';

export interface UserData {
  id: string,
  name: string
}

interface UserDataContext {
  currentUser: UserData,
  fetchUser: () => void
}

const UserAuthContext = createContext<UserDataContext>({
  currentUser: { 
    id: '',
    name: ''
  },
  fetchUser: () => null
});

export const CurrentUserProvider: React.FunctionComponent = ({ children }) => {
  const { error, data } = useQuery(getCurrentUserData);
  const [currentUser, setUser] = useState<UserData>( { id: '', name: '' });
  
  const fetchUser = () => {
    setUser(data?.currentUser);
    error && console.log(error)
  };

  useEffect(() => {
    fetchUser();
  }, [data]);

  return (
    <UserAuthContext.Provider value={{
        currentUser,
        fetchUser
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useCurrentUserContext = () => useContext(UserAuthContext);
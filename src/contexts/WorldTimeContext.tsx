import React from 'react';
import {
  useLocalStorage,
  ListArrayType,
  WorldTimeAction,
} from '../hooks/useLocalStorage';
export const WorldTimeContext = React.createContext<{
  userWorldTimeList: ListArrayType;
  dispatch: React.Dispatch<WorldTimeAction>;
}>({ userWorldTimeList: [], dispatch: () => {} });

export const WorldTimeContextProvider: React.FC = ({ children }) => {
  const { worldTimeList, dispatch } = useLocalStorage();
  return (
    <WorldTimeContext.Provider
      value={{
        userWorldTimeList: worldTimeList,
        dispatch: dispatch,
      }}>
      {children}
    </WorldTimeContext.Provider>
  );
};

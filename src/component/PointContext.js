import React, { createContext, useState, useContext } from 'react';
const PointsContext = createContext();
export const PointsProvider = ({ children }) => {
  const [easyPoints, setEasyPoints] = useState(0);
  const [mediumPoints, setMediumPoints] = useState(0);
  const [hardPoints, setHardPoints] = useState(0);

  return (
    <PointsContext.Provider
      value={{
        easyPoints,
        setEasyPoints,
        mediumPoints,
        setMediumPoints,
        hardPoints,
        setHardPoints,
      }}
    >
      {children}
    </PointsContext.Provider>
  );
};

export const usePoints = () => useContext(PointsContext);

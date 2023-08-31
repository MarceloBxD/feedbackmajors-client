"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextProps {
  rating: undefined | number;
  setRating: React.Dispatch<React.SetStateAction<undefined | number>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  isDownArrowIconClicked: boolean;
  setIsDownArrowIconClicked: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<ContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [rating, setRating] = useState<undefined | number>(5);
  const [description, setDescription] = useState<string>("");
  const [isDownArrowIconClicked, setIsDownArrowIconClicked] = useState(false);
  const [error, setError] = useState<boolean>(false);

  const value = {
    rating,
    setRating,
    description,
    setDescription,
    isDownArrowIconClicked,
    setIsDownArrowIconClicked,
    error,
    setError,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}

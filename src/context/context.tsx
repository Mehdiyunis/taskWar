'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type GlobalContextType = {
    createListPopup: boolean;
    setCreateListPopup: (newValue: boolean) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {

    const [createListPopup, setCreateListPopup] = useState(false);

    return (
        <GlobalContext.Provider value={{ createListPopup, setCreateListPopup }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = useContext(GlobalContext)
    if (!context) throw new Error("useGlobal must be used within GlobalProvider")
    return context
}
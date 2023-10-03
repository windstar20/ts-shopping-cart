import { createContext, ReactNode, useContext, useState } from "react"

const ShoppingCartContext = createContext({});

type ShoppingCartProviderProps = {
    children : ReactNode
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

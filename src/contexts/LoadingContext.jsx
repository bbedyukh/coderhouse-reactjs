import { createContext, useState, useContext } from 'react'

const LoadingContext = createContext()

export const useLoadingContext = () => useContext(LoadingContext)

export const LoadingContextProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true)

    return (
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

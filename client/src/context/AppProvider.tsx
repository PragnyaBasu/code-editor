import { ReactNode } from "react"
import { AppContextProvider } from "./AppContext.js"

import { FileContextProvider } from "./FileContext.jsx"
import { RunCodeContextProvider } from "./RunCodeContext.jsx"

import { SocketProvider } from "./SocketContext.jsx"
import { ViewContextProvider } from "./ViewContext.js"

function AppProvider({ children }: { children: ReactNode }) {
    return (
        <AppContextProvider>
            <SocketProvider>
                    <ViewContextProvider>
                        <FileContextProvider>
                            <RunCodeContextProvider>
                                
                                    {children}
                                
                            </RunCodeContextProvider>
                        </FileContextProvider>
                    </ViewContextProvider>
            </SocketProvider>
        </AppContextProvider>
    )
}

export default AppProvider

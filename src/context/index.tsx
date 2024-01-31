"use client"
import {createContext, useContext, useState} from "react";

const AppContext = createContext<any>(false);

export function AppWrapper({children}: {
    children: React.ReactNode;
}) {
    let [notificationState, setNotificationState] = useState({
        isOpen: false,
        notificationMessage: "Message",
        notificationTitle: "Title",
        timer: null
    });
    return (
        <AppContext.Provider value={{notificationState, setNotificationState}}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
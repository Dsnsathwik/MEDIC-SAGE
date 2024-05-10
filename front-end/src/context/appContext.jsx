import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
    const _URL = "http://localhost:4000";
    const contextValue = {
        _URL
    };

    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

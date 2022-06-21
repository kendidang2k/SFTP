const { useState, useContext, createContext } = wp.element;

const StoreContext = createContext();

function StoreProvider({ children }) {

    const [testData, setTestData] = useState(false)

    return (
        <StoreContext.Provider value={{
            testData, setTestData
        }}>
            {children}
        </StoreContext.Provider>
    )
}

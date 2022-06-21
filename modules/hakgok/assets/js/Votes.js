const { render, useState, createContext, useContext } = wp.element;
const {
    Container,
    Card,
    CardContent,
    Typography,
    Button,
    TextField,
    Autocomplete,
    Grid,
    Box,
    Switch,
    FormControlLabel,
    ThemeProvider,
    createTheme,
} = MaterialUI;

const StoreContext = createContext()

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

function TodoList() {
    const [votes, setVotes] = useState(0);
    const {testData} = useContext(StoreContext)
    console.log('testData', testData);
    const addVote = () => {
        setVotes(votes + 1);
    };

    return (
        <div>
            <h2>{votes} Votes</h2>
            <p>
                <Button sx={{ backgroundColor: '#000' }} onClick={addVote}>Vote!</Button>
            </p>
        </div>
    )
}

const Votes = () => {
    return (
        <StoreProvider>
            <TodoList/>
        </StoreProvider>
    );
};
render(<Votes />, document.getElementById(`test`));
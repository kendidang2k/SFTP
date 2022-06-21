const { render, useState } = wp.element;
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
// import { Button } from '../lib/material-ui.production.min.js'

const Votes = () => {
    const [votes, setVotes] = useState(0);
    const addVote = () => {
        setVotes(votes + 1);
    };

    console.log('conf_vars', conf_vars);
    return (
        <div>
            <h2>{votes} Votes</h2>
            <p>
                <Button sx={{ backgroundColor: '#000' }} onClick={addVote}>Vote!</Button>
            </p>
        </div>
    );
};
render(<Votes />, document.getElementById(`test`));
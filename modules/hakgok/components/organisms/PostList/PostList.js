const {
    Container,
    Card,
    CardContent,
    Typography,
    ButtonBase,
    TextField,
    Autocomplete,
    Grid,
    Box,
    Switch,
    FormControlLabel,
    ThemeProvider,
    createTheme,
} = MaterialUI;

function PostList() {

    return (
        <Grid container sx={{ maxWidth: '80%', margin: 'auto' }}>
            {
                testData && testData.map((postItem, index) => {
                    return (
                        <Grid item xs={12} key={index} >
                            <Post postItem={postItem} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

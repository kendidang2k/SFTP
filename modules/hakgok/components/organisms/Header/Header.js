const { render, useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography,
    createMuiTheme
} = MaterialUI;

const headerBackground = '/modules/hakgok/assets/img/forest-bg.jpg'


function Header() {
    return (
        <Grid sx={{ width: '100%', height: '300px', backgroundImage: `url(${headerBackground})`, backgroundSize: 'cover', padding: '30px 0' }}>
            <Grid container className="header" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                <Grid item xs={2}>
                    <Weather />
                </Grid>
                <Grid item xs={8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SearchBar />
                </Grid>
                <Grid item xs={2}>
                    <Setting />
                </Grid>
            </Grid>
            <Grid>

            </Grid>
        </Grid>
    )
}

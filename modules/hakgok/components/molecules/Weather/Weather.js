const { useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography,
    createMuiTheme
} = MaterialUI;

const dotsIcon = '/modules/hakgok/assets/img/dots.svg'

function Weather() {
    return (
        <Grid className="weather" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Box component="img" src={dotsIcon} alt="dots icon" sx={{ width: '40px', filter: 'invert(1)' }} />
            <Typography component={"p"} sx={{ color: '#fff' }}>Phường 25, 25&deg;C</Typography>
        </Grid >
    )
}

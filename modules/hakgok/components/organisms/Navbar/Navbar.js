const { render, useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography,
    createMuiTheme,
    ButtonBase
} = MaterialUI;

const logo = "/modules/hakgok/assets/img/logo.png";

const newsNavData = [
    {
        title: 'Business'
    },
    {
        title: 'Politics'
    },
    {
        title: 'Entertainment'
    },
    {
        title: 'Health'
    },
    {
        title: 'Travel'
    },
    {
        title: 'Financial'
    },
]

function NewsNav() {
    return (
        <Grid className="nav__bar" sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box component={'img'} src={logo} alt="logo" sx={{ width: '20px' }} />
        </Grid>
    )
}

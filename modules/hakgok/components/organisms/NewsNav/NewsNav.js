const { render, useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography,
    createMuiTheme,
    ButtonBase,
    Link
} = MaterialUI;

const NEWS_URL = 'https://test-hakgok.hahalolo.com/create-news/';

const icon1 = "/modules/hakgok/assets/img/menu-icon.svg";

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
        <Grid className="news__nav" sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: { xs: 'column', md: 'row' } }}>
            <ButtonBase>
                <Box component="img" src={icon1} alt="icon" sx={{ filter: 'invert(1)', width: '24px', cursor: 'pointer' }} />
            </ButtonBase>
            <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                {
                    newsNavData && newsNavData.map((navItem, index) => {
                        return (
                            <Box key={index} className="news__nav__item" sx={{ padding: '0 25px', borderRight: '1px solid #fff', cursor: 'pointer', transition: '.3s ease-in-out', height: '17px' }} >
                                <NewsNavItem navItemData={navItem} />
                            </Box>
                        )
                    })
                }
            </Grid>
            <Link href={NEWS_URL}>Create news</Link>
        </Grid>
    )
}

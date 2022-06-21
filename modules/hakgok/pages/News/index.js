// const i18next = require("./lib/i18next");

const { render, useState, createContext, useEffect, useContext } = wp.element;
const {
    Box,
    Grid
} = MaterialUI;

const News = () => {

    return (
        <NewsProvider>
            <Header />
            <Grid sx={{ width: '100%', backgroundColor: 'rgb(36, 36, 36)', padding: '10px 0' }}>
                <Grid sx={{ maxWidth: { xs: '500px', md: '800px', lg: '1100px', xl: '1300px' }, margin: 'auto' }}>
                    <NewsNav />
                    <NewsList />
                    <UserNews />
                </Grid>
            </Grid>
        </NewsProvider>
        // <NewsProvider>
        // <div div > hello new apge</div >
        // </NewsProvider>
    )
}
render(<News />, document.getElementById(`news-page`));
const { render, useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography
} = MaterialUI;

function NewsList() {

    const { newsList } = useContext(NewsContext)

    return (
        <Grid container sx={{ display: 'flex', maxWidth: { xs: '375px', sm: '650px', md: '1350px', lg: '1532px' }, margin: 'auto', width: '100%', padding: '20px 20px' }}>
            {
                newsList && newsList.map((item, index) => {
                    return (
                        <Grid item xs={index % 7 == 0 || index == 0 ? 4.8 : 2.4} key={index} sx={{ padding: '5px', }}>
                            <NewsItem itemData={item} />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}



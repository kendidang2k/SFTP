const { render, useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography
} = MaterialUI;

function NewsItem({ itemData }) {
    // console.log('link', itemData.link)
    // console.log('itemData.creator[0]', itemData.creator[0])
    // console.log('itemData.title', itemData.title)

    return (
        <Grid sx={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden', borderRadius: '5px', zIndex: 5 }}>
            {
                itemData && <a href={itemData.link} className="item__link">
                    <Box component="img" sx={{ position: 'absolute', left: '0', top: '0', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }} src="https://1.bp.blogspot.com/-LdwXSQ1_t6Q/XU7_o6Xj2kI/AAAAAAAAPGA/I0_OMOneyRs8x4iJcto8YIgLpE_3eXEDwCLcBGAs/s1600/sharon-mccutcheon-rItGZ4vquWk-unsplash.jpg" alt="img" />
                    <Box className="news__item__cover__content" sx={{ height: '250px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', padding: '15px', flexDirection: 'column', boxShadow: '#000000c7 0px -100px 55px 11px inset', transition: '.3s ease-in-out' }}>
                        <Typography component={"p"} sx={{ zIndex: '1', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>{itemData.title}</Typography>
                        {
                            itemData.creator && <Typography component={"p"}>{itemData.creator[0]}</Typography>
                        }
                    </Box>
                </a>
            }
        </Grid>
    )
}

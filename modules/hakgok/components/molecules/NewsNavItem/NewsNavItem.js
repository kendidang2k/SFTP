const { render, useState, createContext, useEffect, useContext } = wp.element;
const {
    Box,
    Grid,
    Typography
} = MaterialUI;

function NewsNavItem({ navItemData }) {

    const { setEndPoint } = useContext(NewsContext);

    return (
        <Grid onClick={() => setEndPoint(navItemData.title)} sx={{ lineHeight: '17px' }}>
            {
                navItemData.icon && <Box component="img" src={navItemData.icon} alt="icon" sx={{ width: '32px' }} />
            }
            {
                navItemData.title && <Typography component={"span"} className="news__nav__item__title" sx={{ color: '#fff', fontSize: "15px", fontWeight: 'bold', lineHeight: '15px' }}>{navItemData.title}</Typography>
            }
        </Grid>
    )
}

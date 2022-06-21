const { render, useState, createContext, useEffect, useContext } = wp.element;
const {
    Box,
    Grid,
    Typography,
    ButtonBase
} = MaterialUI;

const user = '/modules/hakgok/assets/img/user-profile.svg'
const notification = '/modules/hakgok/assets/img/notification.svg'
const cog = '/modules/hakgok/assets/img/cog.svg'


function Setting({ navItemData }) {

    return (
        <Grid>
            <ButtonBase sx={{ border: '1px solid rgba(255, 255, 255, 0.4)', borderRadius: '20px', padding: '2px 8px' }}>
                <Typography component={"p"} sx={{ color: '#fff', fontSize: '13px' }}>Đăng nhập</Typography>
                <Box component="img" src={user} alt="user" sx={{ width: '20px', filter: 'invert(1)', marginLeft: '10px' }}></Box>
            </ButtonBase>
            <ButtonBase sx={{ position: 'relative', padding: '0 5px' }}>
                <Box component="img" src={notification} alt="user" sx={{ width: '28px', filter: 'invert(1)', marginLeft: '10px' }}></Box>
                <Typography sx={{ width: '15px', height: '15px', position: 'absolute', right: '0', top: 0, backgroundColor: '#ff0000', color: '#fff', fontSize: '10px', borderRadius: '50%' }}>1</Typography>
            </ButtonBase>
            <ButtonBase sx={{ position: 'relative', padding: '0 5px' }}>
                <Box component="img" src={cog} alt="cog" sx={{ width: '24px', filter: 'invert(1)', marginLeft: '10px' }}></Box>
            </ButtonBase>
        </Grid>
    )
}

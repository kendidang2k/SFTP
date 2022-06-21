const { render, useState, createContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography,
    InputBase,
    ButtonBase
} = MaterialUI;

const voice = '/modules/hakgok/assets/img/voice.svg'
const search = '/modules/hakgok/assets/img/search.svg'



function SearchBar() {

    return (
        <Grid container sx={{ width: '80%', backgroundColor: '#4a4a4a', borderRadius: '30px', padding: '7px 15px', display: 'flex', alignitems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
            <InputBase placeholder="Tìm kiếm trên web" sx={{ color: '#fff', width: '87%' }}></InputBase>
            <Box>
                <ButtonBase sx={{ padding: '0 15px' }}>
                    <Box component="img" src={voice} alt="voice" sx={{ filter: 'invert(1)', width: '20px' }} />
                </ButtonBase>
                <ButtonBase >
                    <Box component="img" src={search} alt="search" sx={{ filter: 'invert(1)', width: '20px' }} />
                </ButtonBase>
            </Box>
        </Grid>
    )
}

const { useState, useContext } = wp.element;
const {
    Container,
    Card,
    CardContent,
    Typography,
    ButtonBase,
    TextField,
    Autocomplete,
    Grid,
    Box,
    Switch,
    FormControlLabel,
    ThemeProvider,
    createTheme,
    Select,
    MenuItem
} = MaterialUI;

const earth = '/modules/hakgok/assets/img/earth.png'

// const BannerEn = 


function Banner() {

    const { testData } = useContext(StoreContext)
    const { language, setLanguage, languageData } = React.useContext(LanguageContext);
    // const { t, i18n } = useTranslation();

    const handleChange = (e) => {
        setLanguage(e.target.value);
        localStorage.setItem('language', e.target.value)
    };

    return (
        <Box sx={{ width: '100%', padding: '24px 16px', backgroundColor: 'rgba(32,132,217,0.2)' }}>
            <Grid sx={{ maxWidth: '1600px', margin: 'auto', padding: { xs: '0 0 100px 0', md: '0 20px' }, position: 'relative' }}>
                <Box sx={{ width: '1024px', height: '1024px', borderRadius: '50%', backgroundColor: 'rgba(32,132,217,0.4)', position: 'absolute', left: { xs: '-500px', md: '-400px' }, top: { xs: '-500px', md: '-400px' }, zIndex: '-1' }}></Box>
                <Grid container sx={{ zIndex: '10', width: '100%' }}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-end' } }}>
                        <Box sx={{ width: { xs: '300px', md: '600px' }, height: { xs: '300px', md: '600px' } }}>
                            <Box component="img" src={earth} alt='earth' sx={{ width: '100%', transform: { md: 'scale(1.3)', marginTop: { md: '200px' } } }}></Box>
                        </Box>
                    </Grid>
                    {
                        languageData.length > 0 && <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', flexDirection: 'column', textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography component={"p"} sx={{ fontSize: { xs: '28px', md: '38px', lg: '45px' }, fontWeight: 'bold', color: '#2084d9', marginBottom: '20px' }}>{languageData[0].componentData.title}</Typography>
                            <Typography component={"p"} sx={{ fontSize: { xs: '15px', md: '20px', lg: '25px' }, fontWeight: 'bold', color: '#2084d9', marginBottom: '15px' }}>{languageData[0].componentData.content}</Typography>
                            <ButtonBase sx={{ padding: '15px 30px', fontSize: '15px', fontWeight: 'bold', backgroundColor: '#00249c', color: '#fff', borderRadius: '10px' }}>{languageData[0].componentData.buttonText}</ButtonBase>
                        </Grid>
                    }
                </Grid>
            </Grid>
            <ButtonBase onClick={() => changeLanguage('vi')}>Change language</ButtonBase>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'vi'}>Vietnamese</MenuItem>
            </Select>
        </Box >
    )
}

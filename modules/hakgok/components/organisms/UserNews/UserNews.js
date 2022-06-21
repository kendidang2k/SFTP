const { render, useState, useContext, useEffect } = wp.element;
const {
    Box,
    Grid,
    Typography,
    createMuiTheme,
    ButtonBase,
    Link
} = MaterialUI;

const userNewsList = [

]

function UserNews() {

    const { newsUserList } = useContext(NewsContext);

    return (
        <Grid className="user__news__list" sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
            {
                newsUserList && newsUserList.map((item, index) => {
                    return (
                        <Grid key={index}>
                            {item.title}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

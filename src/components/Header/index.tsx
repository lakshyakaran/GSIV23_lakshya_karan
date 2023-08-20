import { Toolbar, Box, AppBar, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Home, Search } from '@mui/icons-material';
import useStyle from './style';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
    children: any;
    onSearchClick: any;
    onSearchChange: any;
}

export default function Navigation(props: Props) {
    const { children, onSearchClick, onSearchChange } = props;
    const classes = useStyle();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <Box className={classes.dFlex}>
            <AppBar position="fixed">
                <Toolbar
                    className={classes.toolBar}>
                    <Box className={classes.w100}>
                        {
                            pathname === '/' ? (
                                <TextField
                                    placeholder="Search"
                                    id="outlined-start-adornment"
                                    onChange={(event: any) => onSearchChange(event)}
                                    InputProps={{
                                        startAdornment:
                                            <InputAdornment position="start"
                                                onClick={onSearchClick}
                                            >
                                                <Search />
                                            </InputAdornment>,
                                    }}
                                />
                            ) : (
                                <Typography className={classes.movieDetails}>Movie Details</Typography>
                            )
                        }
                    </Box>
                    <IconButton
                        onClick={() => navigate(`/`)}
                        className={classes.homeIcon}
                    >
                        <Home />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                className={classes.Main}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
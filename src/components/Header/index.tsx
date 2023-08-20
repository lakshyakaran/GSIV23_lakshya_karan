import { Toolbar, Box, AppBar, IconButton, InputAdornment, TextField } from '@mui/material';
import { Home, Search } from '@mui/icons-material';
import useStyle from './style';

interface Props {
    children: any;
    onHomeClick: any;
    onSearchClick: any;
    onSearchChange: any;
}

export default function Navigation(props: Props) {
    const { children, onHomeClick, onSearchClick, onSearchChange } = props;
    const classes = useStyle();

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed">
                <Toolbar
                    className={classes.toolBar}>
                    <Box
                        sx={{ width: '100%' }}
                    >
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

                    </Box>
                    <IconButton
                        onClick={onHomeClick}
                        className={classes.homeIcon}
                    >
                        <Home />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>

        </Box>
    );
}
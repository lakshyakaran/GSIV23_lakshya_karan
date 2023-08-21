import Container from '../../components/Container';
import { Box, Typography, Grid ,Skeleton} from '@mui/material';
import { useParams } from 'react-router-dom';
import useStyle from './style';
import useApi from '../../hook/UseFetch';


interface MovieList {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    release_date: string;
    runtime: string;
}




const MovieDetails = () => {
    const classes = useStyle();
    const { movieId } = useParams();
    let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const { data, loading } = useApi<MovieList>(apiUrl);

    const renderLoading = () => {
        return(
            <Grid container spacing={2}>
                <Grid item lg={2} md={2}>
                    <Box className={classes.blankImg}>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Box className={classes.column}>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieTitle}>
                            <Skeleton />
                            </Typography>
                            <Typography className={classes.movieRating}>
                            <Skeleton />
                            </Typography>
                        </Box>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieDesc}>
                            <Skeleton />
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                            <Skeleton />
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                            <Skeleton />
                            </Typography>
                        </Box>
                        <Box className={classes.dFlex}>
                            <Typography className={classes.movieDesc}>
                            <Skeleton />
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    };
    
    const renderContent = () => {
        return(
            <Grid container spacing={2}>
                <Grid item lg={2} md={2}>
                    <Box className={classes.blankImg}>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Box className={classes.column}>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieTitle}>
                            {data?.title}
                            </Typography>
                            <Typography className={classes.movieRating}>
                            ({data?.vote_average})
                            </Typography>
                        </Box>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieDesc}>
                            {data?.release_date}
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                            {data?.runtime}
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                            <Skeleton />
                            </Typography>
                        </Box>
                        <Box className={classes.dFlex}>
                            <Typography className={classes.movieDesc}>
                            {data?.overview}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    };

    return (
        <Container>
            {
                loading ? (
                    renderLoading()
                ):(
                    renderContent()
                )
            }
        </Container>
    )
}

export default MovieDetails
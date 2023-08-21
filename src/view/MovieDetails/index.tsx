import Container from '../../components/Container';
import { Box, Typography, Grid, Skeleton } from '@mui/material';
import { useParams } from 'react-router-dom';
import useStyle from './style';
import useApi from '../../hook/UseFetch';
import moment from 'moment'

interface MovieList {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
    release_date: string;
    status: string;
    runtime: any;
}




const MovieDetails = () => {
    const classes = useStyle();
    const { movieId } = useParams();
    let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const { data, loading } = useApi<MovieList>(apiUrl);

    const renderLoading = () => {
        return (
            <Grid container spacing={2}>
                <Grid item lg={2} md={2}>
                    <Box className={classes.blankImg}>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Box className={classes.column}>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieTitle}>
                                <Skeleton width={50} />
                            </Typography>
                            <Typography className={classes.movieRating}>
                                <Skeleton width={50} />
                            </Typography>
                        </Box>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieDesc}>
                                <Skeleton width={50} />
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                                <Skeleton width={50} />
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                                <Skeleton width={50} />
                            </Typography>
                        </Box>
                        <Box className={classes.dFlex}>
                            <Typography className={classes.movieDesc}>
                                <Skeleton width={50} />
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    };

    const renderContent = () => {
        return (
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
                                {moment(data?.release_date).format('DD-MM-YYYY')} |
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                                {convertMinutesToHours(data?.runtime)} |
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                                {data?.status}
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
        <Container
            onSearchClick={null}
            onSearchChange={null}
        >
            {
                loading ? (
                    renderLoading()
                ) : (
                    renderContent()
                )
            }
        </Container>
    )
}

function convertMinutesToHours(minutes: string): string {
    const hours = Math.floor(parseInt(minutes) / 60);
    const remainingMinutes = parseInt(minutes) % 60;

    const hoursText = hours > 0 ? `${hours}h` : '';
    const minutesText = remainingMinutes > 0 ? `${remainingMinutes}m` : '';

    return `${hoursText}:${minutesText}`.trim();
}

export default MovieDetails
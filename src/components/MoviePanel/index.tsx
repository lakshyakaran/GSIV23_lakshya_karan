import { Box, Paper, Typography } from '@mui/material';
import useStyle from './style';

interface Props {
    movieTitle: any;
    rating: any;
    description: any;
    moviePoster: any;
    onBoxClick: any;
}

const MoviePanel = (props: Props) => {
    const { movieTitle, rating, description, moviePoster, onBoxClick } = props;
    const classes = useStyle();

    return (
        <Paper className={classes.border} onClick={onBoxClick}>
            <Box>
                <Box className={classes.blankImg}>
                    {moviePoster}
                </Box>
                <Box
                    className={classes.spacing}
                >
                    <Box className={classes.spaceBetween}>
                        <Typography className={classes.movieTitle}>
                            {movieTitle}
                        </Typography>
                        <Typography className={classes.movieRating}>
                            {rating}
                        </Typography>
                    </Box>
                    <Box className="movieDescription">
                        <Typography className={`${classes.movieDescription} `}>
                            {description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default MoviePanel


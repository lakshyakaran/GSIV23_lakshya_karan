import { Box, Paper, Typography } from '@mui/material';
import useStyle from './style';

interface Props {
    movieTitle: any;
    rating: any;
    description: any;
    moviePoster: any;
}

const MoviePanel = (props: Props) => {
    const { movieTitle, rating, description, moviePoster } = props;
    const classes = useStyle();
    return (
        <Paper className={classes.border}>
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
                        <Typography className={classes.movieDescription}>
                            {rating}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography className={classes.movieDescription}>
                            {description}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )
}

export default MoviePanel
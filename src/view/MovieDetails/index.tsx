import Container from '../../components/Container';
import { Box, Typography, Grid } from '@mui/material';
import useStyle from './style';

const MovieDetails = () => {
    const classes = useStyle();
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={2} md={2}>
                    <Box className={classes.blankImg}>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6}>
                    <Box className={classes.column}>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieTitle}>
                                Movie Title
                            </Typography>
                            <Typography className={classes.movieRating}>
                                (Rating)
                            </Typography>
                        </Box>
                        <Box className={classes.dCenter}>
                            <Typography className={classes.movieDesc}>
                                Year |
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                                Length |
                            </Typography>
                            <Typography className={`${classes.movieDesc} ${classes.ml5}`}>
                                Director
                            </Typography>
                        </Box>
                        <Box className={classes.dFlex}>
                            <Typography className={classes.movieDesc}>
                                Description:  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MovieDetails
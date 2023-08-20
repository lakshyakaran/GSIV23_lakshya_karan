import { Grid, Skeleton } from '@mui/material';
import Conatiner from '../../components/Container'
import MoviePanel from '../../components/MoviePanel'

const Home = () => {

    const renderContent = () => {
        const content = [];
        for (let i = 0; i < 20; i++) {
            content.push(
                <Grid item lg={2} md={2}>
                    <MoviePanel
                        movieTitle={
                            <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
                        }
                        rating={
                            <Skeleton variant="text" width={50} sx={{ fontSize: '1rem' }} />
                        }
                        description={
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                        }
                        moviePoster={
                            <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </>
                        }
                    />
                </Grid>
            );
        }
        return content;
    };

    return (
        <Conatiner>
            <Grid container spacing={2}>
                {renderContent()}
            </Grid>
        </Conatiner>
    )
}

export default Home
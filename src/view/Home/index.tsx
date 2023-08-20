import { Grid, Skeleton } from '@mui/material';
import Container from '../../components/Container'
import MoviePanel from '../../components/MoviePanel';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const renderContent = () => {
        const content = [];
        for (let i = 0; i < 20; i++) {
            content.push(
                <Grid item lg={2} md={2}>
                    <MoviePanel
                        onBoxClick={() => navigate(`/movie-details/${i}`)}
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
        <Container>
            <Grid container spacing={2}>
                {renderContent()}
            </Grid>
        </Container>
    )
}

export default Home
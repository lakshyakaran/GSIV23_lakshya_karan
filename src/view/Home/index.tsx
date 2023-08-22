import { useEffect, useState } from 'react';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import Container from '../../components/Container'
import MoviePanel from '../../components/MoviePanel';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../features/Slice/movie';
import { retrieveSearch } from '../../api/Search';
import { movieList } from '../../api/MovieList';


const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('')
    const [loading, setLoading] = useState(true)
    const { moviesList } = useSelector((state: any) => state?.movies);
    
    useEffect(() => {
        if (searchValue === '') {
            movieList().then((res: any) => {
                setLoading(false)
                dispatch(setMovies(res))
            })
        }

    }, [searchValue])

    const handleSearch = () => {
        setLoading(true)
        retrieveSearch(searchValue).then((res: any) => {
            setLoading(false)
            dispatch(setMovies(res))
        })
    }

    const renderLoading = () => {
        const content = [];
        for (let i = 0; i < 20; i++) {
            content.push(
                <Grid item lg={2} md={2}>
                    <MoviePanel
                        onBoxClick={() => navigate(`/movie-details/${i}`)}
                        movieTitle={
                            <Skeleton data-testid="skeleton" variant="text" width={50} sx={{ fontSize: '1rem' }} />
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

    const renderContent = () => {
        return (
            <>
                {moviesList?.results?.map((item: any) => {
                    return (
                        <Grid item lg={2} md={2} key={item.id}>
                            <MoviePanel
                                key={item.id}
                                onBoxClick={() => navigate(`/movie-details/${item.id}`)}
                                movieTitle={item.title}
                                rating={(item.vote_average)}
                                description={item.overview}
                                // moviePoster={`${apiUrl}${item.backdrop_path}`}
                                moviePoster={null}
                            />
                        </Grid>
                    )
                })}
            </>
        )
    };

    const renderNoData = () =>{
        return(
            <Box sx={{ display: 'flex', justifyContent: 'center',marginTop:'40px',width:'100%'  }}>
                <Typography sx={{color:'#CF3721'}}>No Data Found!</Typography>
            </Box>
        )
    }

    return (
        <Container
            onSearchClick={handleSearch}
            onSearchChange={(val: any) => setSearchValue(val)}
        >
            <Grid container spacing={2}>
                {
                    loading ? (
                        renderLoading()
                    ) :
                        moviesList.results.length === 0 ? (
                           renderNoData()
                        ) :
                            (
                                renderContent()
                            )
                }
            </Grid>
        </Container>
    )
}

export default Home
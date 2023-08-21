import { useEffect, useState } from 'react';
import { Grid, Skeleton } from '@mui/material';
import Container from '../../components/Container'
import MoviePanel from '../../components/MoviePanel';
import { useNavigate } from 'react-router-dom';
import useApi from '../../hook/UseFetch';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../../features/Slice/movie';
import { retrieveSearch } from '../../api/Search';

interface MovieList {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: string;
}

interface Item {
    result: MovieList[];
}

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState('')
    const { moviesList } = useSelector((state: any) => state?.movies);
    let apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    const { data, loading } = useApi<Item>(apiUrl);

    useEffect(() => {
        if (data) {
            dispatch(setMovies(data))
        }
    }, [data])

    const handleSearch = () => {
        retrieveSearch(searchValue).then((res: any) => {
            console.log(res.results)
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
                        <Grid item lg={2} md={2}>
                            <MoviePanel
                                key={item.id}
                                onBoxClick={() => navigate(`/movie-details/${item.id}`)}
                                movieTitle={item.title}
                                rating={item.vote_average}
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

    return (
        <Container
            onSearchClick={handleSearch}
            onSearchChange={(val: any) => setSearchValue(val)}
        >
            <Grid container spacing={2}>
                {
                    loading ? (
                        renderLoading()
                    ) : (
                        renderContent()
                    )
                }
            </Grid>
        </Container>
    )
}

export default Home
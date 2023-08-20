import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Movie {
    id: number;
    title: string;
}

interface MoviesState {
    moviesList: Movie[];
}

const initialState: MoviesState = {
    moviesList: [],
};

const movies = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMovies: (state: any, action: PayloadAction<Movie[]>) => {
            state.moviesList = action.payload;
        },
        resetMovies: () => initialState,
    },
});

export const { setMovies, resetMovies } = movies.actions;

export default movies.reducer;

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from './index';

jest.mock('../../hook/UseFetch', () => ({
    __esModule: true,
    default: jest.fn(() => ({ data: null, loading: false })),
}));

const mockStore = configureStore([]);

describe('Home Component', () => {
    it('renders loading skeletons when loading', () => {
        const store = mockStore({
            movies: {
                moviesList: [],
            },
        });

        const { getAllByTestId } = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        const skeletons = getAllByTestId('skeleton');
        expect(skeletons).toHaveLength(60); // 20 grids * 3 skeleton elements
    });

    it('renders movie panels when not loading', () => {
        const movie = {
            id: 1,
            title: 'Movie Title',
            vote_average: '8.5',
            overview: 'Movie Overview',
        };

        const store = mockStore({
            movies: {
                moviesList: {
                    results: [movie],
                },
            },
        });

        const { getByText } = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );

        expect(getByText(movie.title)).toBeInTheDocument();
        expect(getByText(movie.vote_average)).toBeInTheDocument();
        expect(getByText(movie.overview)).toBeInTheDocument();
    });
});

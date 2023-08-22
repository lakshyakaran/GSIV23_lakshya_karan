import axios from 'axios';

interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
}
let accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjU0NWE3YmQ2M2YzNTVkZTEwYjYwZGFiMDljNzk1NSIsInN1YiI6IjY0ZTFiZDM4NWFiODFhMDEzOTFhZTAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zUW1D0cRRyXx8xqGNttE5Id7naBx9CYO2UHsZYOKKlQ'
export const movieList = async (): Promise<ApiResponse<any>> => {
    try {
        const response = await axios({
            url: `https://api.themoviedb.org/3/discover/movie`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error: any) {
        if (error.message === 'Network Error') {
            return { data: error, status: -1, statusText: 'Network Error' };
        } else if (error.response?.status === 400) {
            return { data: error.response.data, status: 400, statusText: 'Bad Request' };
        } else if (error.response?.status === 401) {
            return { data: error.response.data, status: 401, statusText: 'Unauthorized' };
        } else {
            return {
                data: error.response?.data || 'An error occurred',
                status: error.response?.status || -1,
                statusText: 'Unknown Error',
            };
        }
    }
};

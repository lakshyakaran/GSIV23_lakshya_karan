import { useState, useEffect } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
    data: T | null;
    loading: boolean;
    error: AxiosError | null;
}

function useApi<T>(endpoint: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);
    let accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjU0NWE3YmQ2M2YzNTVkZTEwYjYwZGFiMDljNzk1NSIsInN1YiI6IjY0ZTFiZDM4NWFiODFhMDEzOTFhZTAxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zUW1D0cRRyXx8xqGNttE5Id7naBx9CYO2UHsZYOKKlQ'
    useEffect(() => {
        const fetchData = async () => {
            try {
                const loadingTimeout = setTimeout(() => {
                    setLoading(false);
                }, 8000);
                const response: AxiosResponse<T> = await axios.get(endpoint, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                clearTimeout(loadingTimeout);
                setData(response.data);
                setLoading(false);
            } catch (error: any) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, accessToken]);

    return { data, loading, error };
}

export default useApi;

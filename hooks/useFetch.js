import axios from 'axios';
import {
    useEffect,
    useState
} from 'react';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
            query: 'Python developer in Texas, USA',
            page: '1',
            num_pages: '1'
        },
        headers: {
            'X-RapidAPI-Key': 'b243c13707msh7a344a8656a54ccp176de6jsna1395e41e126',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {
        data,
        isLoading,
        error,
        refetch
    }

}

export default useFetch;
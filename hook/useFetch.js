import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (endpoint, params) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...params },
        headers: {
          'X-RapidAPI-Key': '3544716b77mshd559d8cc90222a0p135a6fjsn4e23a32f4374',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
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
            console.log(error)
            alert('There is an error')
        } finally {

        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };

}

export default useFetch;
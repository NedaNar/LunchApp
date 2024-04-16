import { useState, useEffect } from 'react';
import axios from 'axios';

export enum Endpoint {
  USER = 'user',
  USERS = 'users',
  VENDORS = 'vendors',
  MEALS = 'meals',
  RATINGS = 'ratings',
  AVAILABLE_LUNCH = 'availableLunch',
}

function useFetch<T>(endpoint: Endpoint): { data: T | null; loading: boolean } {
  const [data, setData] = useState<T | null>(null);
  // const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<T>(`http://localhost:3002/${endpoint}`);
        setData(response.data);
      } finally {
        //  catch (error) {
        //   setIsError(true);
        //  }
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  // if (loading) {
  //    return <div>LOADING...</div>
  // }
  // if (isError) {
  //   return <div>Error - nyveike tava serveriux.</div>
  // }
  // if (!data) {
  //   return <div></div>
  // }
  return { data, loading };
}

export default useFetch;

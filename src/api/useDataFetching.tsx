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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<T>(`http://localhost:3002/${endpoint}`);
        setData(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading };
}

export default useFetch;

import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(endpoint:string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3002/${endpoint}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint]); 

  return { data, loading, error };
}

export default useFetch;
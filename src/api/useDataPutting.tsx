import { useState } from 'react';
import axios from 'axios';
import { Endpoint } from './endpoints';

interface PutResult<T> {
  responseData: T | null;
  loading: boolean;
  error: boolean;
  putData: (data: T) => void;
}

function usePut<T>(endpoint: Endpoint): PutResult<T> {
  const [responseData, setResponseData] = useState<T | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const putData = async (data: T) => {
    setLoading(true);
    try {
      const url = `http://localhost:3002/${endpoint}`;
      const response = await axios.patch<T>(url, data);

      if (response.status === 201) {
        setResponseData(response.data);
      } else {
        setError(true);
      }
    } catch (putError) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { responseData, loading, error, putData };
}

export default usePut;

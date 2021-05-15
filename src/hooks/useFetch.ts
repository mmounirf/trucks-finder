import { useState, useEffect } from 'react';
import { IOffer } from '../interfaces/IOffer';

interface UserFetchProps {
    url: string;
    options: RequestInit
}

export default function useFetch(props: UserFetchProps) {
    const { url, options } = props;
    const [response, setResponse] = useState<Array<IOffer> | undefined>();
    const [error, setError] = useState<unknown>();
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setError(undefined);
  
      async function fetchData() {
        try {
          const res = await fetch(url, options);
          if(res.status !== 200) {
            setResponse(undefined);
            setError(res)
          } else {
            const json = await res.json();
            setResponse(json);
          }
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      }
      fetchData();
    }, [url, options]);
  
    return { response, error, loading };
  }
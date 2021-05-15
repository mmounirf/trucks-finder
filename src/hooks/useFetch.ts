import { useState, useEffect } from 'react';

interface UserFetchProps {
    url: string;
    options: RequestInit
}

export default function useFetch(props: UserFetchProps) {
    const { url, options } = props;
    const [response, setResponse] = useState();
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
            console.log("++++++", e)
          setError(e);
        }
        setLoading(false);
      }
      fetchData();
    }, []);
  
    return { response, error, loading };
  }
import { useEffect, useState } from 'react';

export default function useGetRequest<T>(url: string) {
  const [requestData, setRequestData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getRequest() {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const backendData = await response.json();
        console.log(backendData);

        if (!response.ok) {
          throw new Error(backendData.error || 'Server Error');
        }
        setRequestData(backendData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (url) getRequest();
  }, [url]);

  return { requestData, isLoading, error };
}

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
          // If it's a 404 or 500, we throw an error with the code
          console.error(`❌ Request failed at: ${url} | Status: ${response.status}`);
          throw new Error(
            `Error ${response.status}: ${response.statusText || 'Not Found'}`,
          );
        }
        setRequestData(backendData);
      } catch (error) {
        // Here we capture both network errors and the error we launched above.
        if (error instanceof Error) {
          // If the message is from the JSON, we translate it into something human-readable
          const cleanMessage = error.message.includes('Unexpected token')
            ? 'The server returned an invalid format (probably an HTML error page).'
            : error.message;

          setError(cleanMessage);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (url) getRequest();
  }, [url]);

  return { requestData, isLoading, error };
}

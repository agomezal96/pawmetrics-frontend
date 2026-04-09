import { useEffect, useState } from 'react';

export default function useGetRequest<T>(
  url: string,
  params?: Record<string, string>,
) {
  const [requestData, setRequestData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setError(null);

      try {
        // create a url if params exist
        const queryUrl = new URL(url);
        if (params) {
          Object.entries(params).forEach(([key, value]) =>
            queryUrl.searchParams.append(key, value),
          );
        }
        const stringedUrl = queryUrl.toString();

        const response = await fetch(stringedUrl);

        if (!response.ok) {
          // If it's a 404 or 500, we throw an error with the code
          console.error(
            `❌ Request failed at: ${url} | Status: ${response.status}`,
          );
          throw new Error(
            `Error ${response.status}: ${response.statusText || 'Not Found'}`,
          );
        }
        const backendData = await response.json();
        console.log(backendData);
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

    if (url) fetchData();
  }, [url, params]); // We use stringify so that the effect reacts to changes in the params object

  return { requestData, isLoading, error };
}

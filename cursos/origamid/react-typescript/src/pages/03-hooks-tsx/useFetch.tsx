import { useEffect, useRef, useState } from "react";

// data.origamid.dev/produtos

type FetchState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};
export default function useFetch<T>(
  url: RequestInfo | URL,
  options?: RequestInit,
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(options);
  optionsRef.current = options;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        setLoading(true)
        setData(null);

        const resp = await fetch(url, {
          signal,
          ...optionsRef.current,
        });

        if (!resp.ok) throw new Error(`Erro: ${resp.status}`);

        const json = (await resp.json()) as T;
        if (!signal.aborted) setData(json);
      } catch (error) {
        //   if (error instanceof Error) {
        //     setError(error.message);
        //   }
        // setError(error instanceof Error ? error.message : "Erro desconhecido");

        if (!signal.aborted && error instanceof Error) setError(error.message);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

import { useCallback, useState } from "react";

// const set = new Set();

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      console.error(erro)
      json = null;
      setError("Erro");
    } finally {
      setData(json);
      setLoading(false);
    }
    return { response, json };
  }, []);

  // set.add(request)
  // console.log(set)

  return { data, error, loading, request };
};

export default useFetch;

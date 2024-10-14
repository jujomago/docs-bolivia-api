import { useEffect, useState } from 'react';
import { API_URL } from '../utils/contantes.js';


export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL.concat(url), {
        credentials: 'include',
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error fetching data');
      }

      setData(data);
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      alert(err.message);
    } finally {
      setLoading(false); // Asegurar que 'loading' se establece a false incluso si hay un error
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]); // Asegúrate de incluir 'url' como dependencia del efecto

  return { data, loading, error, updateData: setData };
};

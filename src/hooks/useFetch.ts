import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        // Check if the component is still mounted before updating the state
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to cancel any ongoing requests when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading };
};

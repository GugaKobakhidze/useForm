import { useEffect, useState } from "react";

const RestCountries = "https://restcountries.com/v3.1/all";

const useCountryFetch = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await fetch(RestCountries);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    }

    getCountries();
  }, []);

  return { countries };
};

export default useCountryFetch;

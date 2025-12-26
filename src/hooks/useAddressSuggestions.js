import { useState, useEffect } from "react";

export function useAddressSuggestions(address, API_KEY) {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!address) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.locationiq.com/v1/autocomplete.php?key=${API_KEY}&q=${encodeURIComponent(
            address
          )}&format=json&limit=4&countrycodes=ge`
        );

        if (!res.ok) throw new Error("Can't find this address");

        const data = await res.json();
        setSuggestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [address, API_KEY]);

  return { suggestions, isLoading, error };
}

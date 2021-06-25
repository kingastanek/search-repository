import { useState, useEffect } from 'react';

const useDebounce = (value, delay = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState<string>('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

import { useState, useCallback } from 'react';

type tResult = {
  data: {
    count: number;
    results: object[];
  };
};

const useFetch = (fetchMethod: Function) => {
  const [data, setData] = useState<object[] | []>([]);
  const [errors, setErrors] = useState<any>(null);
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const setParamsHandler = useCallback(
    async (params) => {
      try {
        setLoading(true);
        const result: tResult = await fetchMethod({ ...params });
        const {
          data: { count, results },
        } = result;

        setData(results);
        setCount(count);
      } catch (error) {
        setErrors(error)
      } finally {
        setLoading(false);
      }
    },
    [fetchMethod],
  );

  return [setParamsHandler, loading, data, count, errors];
};

export default useFetch;

import { useEffect, useMemo, useState } from "react";

export default function useFetchWithCondition<T>(
  fetchMethod: (...args: any[]) => Promise<T>,
  conditionToPerformFetch: () => boolean = () => true,
  ...params: any[]
) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const memoizedParams = useMemo(() => params, [JSON.stringify(params)]);
  
  useEffect(() => {
    (async () => {
      if(conditionToPerformFetch() == true) {
        setLoading(true);
        setData(await fetchMethod(...params));
        setLoading(false);
      }
    })();
  }, [memoizedParams]);

  return [loading, data];
}

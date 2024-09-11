import {useEffect, useMemo, useState} from "react";

export default function useFetch<T>(fetchMethod: (...args: any[]) => Promise<T>, ...params: any[]) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);

    const memoizedParams = useMemo(() => params, [JSON.stringify(params)]);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setData(await fetchMethod(...params));
            setLoading(false);
        })();
    }, [memoizedParams]);

    return [loading, data];
}

import {useEffect, useState} from "react";

export default function useFetch<T>(fetchMethod: ({}: any) => Promise<T>, params: {[key: string]: any}) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setData(await fetchMethod(params));
            setLoading(false);
        })();
    }, [params]);

    return [loading, data];
}

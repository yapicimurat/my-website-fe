import {useEffect, useState} from "react";

export default function useFetch<T>(fetchMethod: () => Promise<T>) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            setData(await fetchMethod());

            setTimeout(() => {
                setLoading(false);
            }, 2000);
        })();
    }, []);

    return [loading, data];
}

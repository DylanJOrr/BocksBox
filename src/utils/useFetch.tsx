import { useEffect, useState } from "react";
import { Item } from "../share/types/types";

const useFetch = (url: string) => {
	const [data, setData] = useState<Item[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const abortCtrl = new AbortController();

		fetch(url, { signal: abortCtrl.signal })
			.then((res) => {
				if (!res.ok) {
					throw Error("Could not fetch the data for that resource");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsLoading(false);
				setErr(null);
			})
			.catch((err) => {
				if (err.name === "AbortError") {
					console.log("Fetch Aborted");
				} else {
					setIsLoading(false);
					setErr(err.message);
				}
			});

		return () => abortCtrl.abort();
	}, [url]);

	return { data, isLoading, err };
};

export default useFetch;

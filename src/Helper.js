// {
//     mode: 'cors',
//     headers: {
//       'Access-Control-Allow-Origin':'*'
//     }
//   }

import { useEffect, useState } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();

		 fetch(url, { signal: abortCont.signal, mode: 'cors',
         headers: { 'Content-Type': 'application/json'} })
			.then((res) => {
				if (!res.ok) {
					throw Error('Could not fetch the data for that resource');
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
                console.log(data);
				setIsLoading(false);
				setError(null);
			})
			.catch((err) => {
				if (err.name === 'AbortError') {
					console.log('Fetch aborted');
				} else {
					setError(err.message);
					setIsLoading(false);
				}
			});
		return () => abortCont.abort();
	}, [url]);
	return [ data, isLoading, error ];
};
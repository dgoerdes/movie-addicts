/*
 * REQUEST TMDB ACTION
 */
export default ({ props, state, http }) => {
    let queryString = `?api_key=${process.env.REACT_APP_TMDB_KEY}`;
    const { method, endpoint, searchParams } = props.request;

    if (!method || !endpoint) return {
        response: {
            isError: true,
        }
    };

    if (searchParams) {
        queryString += `&${Object.keys(searchParams).map((key) => `${key}=${encodeURIComponent(searchParams[key])}`).join('&')}`;
    }

    const reqUrl = `https://api.themoviedb.org/3${endpoint}${queryString}`;

    return http[method](reqUrl)
        .then((res) => {
            return {
                response: {
                    isError: false,
                    result: res.result,
                }
            };
        })
        .catch((err) => {
            return {
                response: {
                    isError: true,
                    error: JSON.stringify(err),
                }
            };
        });
};

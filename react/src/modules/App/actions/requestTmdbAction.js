/*
 * REQUEST TMDB ACTION
 */
export default ({ props, state, http }) => {
    let queryString = '?api_key=0b3d54f5db191e65a529d9ed46734e9e';
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

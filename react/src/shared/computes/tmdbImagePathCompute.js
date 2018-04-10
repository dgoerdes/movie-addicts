import { Compute } from 'cerebral';
import { state, props } from 'cerebral/tags'

/*
 * TMDB IMAGE PATH COMPUTE
 */
const tmdbImagePathCompute = Compute(
    state`app.tmdbConfig.images`,
    props`posterPath`,
    (imagesConfig, posterPath) => {
        if (!posterPath || !imagesConfig || !imagesConfig.secure_base_url || !imagesConfig.poster_sizes) {
            // TODO: return local fallbackUrl
            return null;
        }

        return `${imagesConfig.secure_base_url}${imagesConfig.poster_sizes[3]}${posterPath}`;
    }
);

export default tmdbImagePathCompute;

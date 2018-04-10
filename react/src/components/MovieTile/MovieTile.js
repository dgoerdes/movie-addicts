import React from 'react';
import PropTypes from 'prop-types';
import { connect } from '@cerebral/react';
import tmdbImagePathCompute from '../../shared/computes/tmdbImagePathCompute';
import Image from '../Image/Image';
import styles from './MovieTile.module.scss';

const MovieTile = ({ title, posterPath, imageUrl }) => {
    return (
        <div className={styles.wrapper}>
            {imageUrl
                ? <Image src={imageUrl} alt={`${title} - Poster`} className={styles.image} draggable={false} />
                : null
            }
        </div>
    );
};

MovieTile.propTypes = {
    posterPath: PropTypes.string,
};

export default MovieTile;

export const MovieTileConnected = connect(
    {
        imageUrl: tmdbImagePathCompute,
    },
    MovieTile
);

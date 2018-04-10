import React from 'react';
import { state } from 'cerebral/tags';
import { connect } from '@cerebral/react';
import classNames from 'classnames';
import containerStyles from '../../styles/modules/container.module.scss';
import gridStyles from '../../styles/modules/grid.module.scss';
import { MovieTileConnected } from '../../components/MovieTile/MovieTile';

const Movies = ({ upcomingMovies }) => {
    return (
        <section className={containerStyles.container}>
            <h1>Upcoming Movies</h1>

            <div className={classNames(gridStyles.grid, gridStyles['-columns4'])}>
                {upcomingMovies && upcomingMovies.map((movie) => (
                    <MovieTileConnected key={movie.id} title={movie.title} posterPath={movie.poster_path} />
                ))}
            </div>
        </section>
    );
};

export default connect(
    {
        upcomingMovies: state`movies.upcoming.results`
    },
    Movies
);

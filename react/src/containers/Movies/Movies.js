import React from 'react';
import { state } from 'cerebral/tags';
import { connect } from '@cerebral/react';
import classNames from 'classnames';
import Headline from '../../components/Headline/Headline';
import { MovieTileConnected } from '../../components/MovieTile/MovieTile';
import containerStyles from '../../styles/modules/container.module.scss';
import gridStyles from '../../styles/modules/grid.module.scss';

const Movies = ({ upcomingMovies }) => {
    return (
        <section className={classNames(containerStyles.container, containerStyles['-spaces'])}>
            <Headline weight={1}>Upcomming Movies</Headline>

            <div className={classNames(gridStyles.grid, gridStyles['-columns2'], gridStyles['-columns4medium'])}>
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

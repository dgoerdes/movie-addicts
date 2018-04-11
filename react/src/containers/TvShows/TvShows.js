import React from 'react';
import classNames from 'classnames';
import Headline from '../../components/Headline/Headline';
import containerStyles from '../../styles/modules/container.module.scss';

const TvShows = () => {
    return (
        <section className={classNames(containerStyles.container, containerStyles['-spaces'])}>
            <Headline weight={1}>TV Shows</Headline>
        </section>
    );
};

export default TvShows;

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './LoadingIndicator.module.scss';

const LoadingIndicator = ({ className }) => {
    return (
        <div className={classNames(className, s.wrapper)}>
            <div className={s.spinner}>
                <div className={classNames(s.bounce, s.bounce1)} />
                <div className={classNames(s.bounce, s.bounce2)} />
                <div className={s.bounce} />
            </div>
        </div>
    );
};

LoadingIndicator.propTypes = {
    className: PropTypes.string,
};

export default LoadingIndicator;

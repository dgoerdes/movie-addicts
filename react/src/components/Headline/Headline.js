import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Headline.module.scss';

const Headline = ({ children, weight, styledWeight }) => {
    const HeadlineElem = `h${weight}`;
    styledWeight = styledWeight || weight;

    return (
        <HeadlineElem className={classNames(s.generic, s[`h${styledWeight}`])}>
            {children}
        </HeadlineElem>
    );
};

Headline.defaultProps = {
    weight: 2
};

Headline.propTypes = {
    weight: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Headline;

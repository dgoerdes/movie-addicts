import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Footer.module.scss';

const Footer = ({ className }) => {
    return (
        <footer className={classNames(className, s.wrapper)}>
            ...
        </footer>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;

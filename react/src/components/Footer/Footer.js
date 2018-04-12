import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './Footer.module.scss';
import Image from '../Image/Image';

const Footer = ({ className }) => {
    return (
        <footer className={classNames(className)}>
            <div className={s.attribution}>
                <Image src="/images/tmdb-logo.svg" alt="TMDb Logo" />
                <p>
                    This website uses
                    the <a href="https://developers.themoviedb.org/3" target="_blank" rel="noopener noreferrer external nofollow">TMDb API</a> but
                    is not endorsed or certified
                    by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer external">TMDb</a>.
                </p>
            </div>

            <div className={s.legal}>
                <p>
                    &copy; Copyright 2018 Daniel Gördes
                </p>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;

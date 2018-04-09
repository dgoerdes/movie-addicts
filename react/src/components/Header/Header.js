import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Activity } from 'react-feather';
import s from './Header.module.scss';

const links = [
    {
        url: '/movies',
        componentName: 'Movies',
        label: 'Movies',
    },
    {
        url: '/tv-shows',
        componentName: 'TvShows',
        label: 'TV Shows',
    }
];

const Header = ({ className, activePage }) => {
    return (
        <header className={classNames(className, s.wrapper)}>
            <nav className={s.nav}>
                <a href="/" className={s.brand}>
                    <Activity className={s.brand__logo} />
                    <span className={s.brand__name}>
                        Movie Addicts
                    </span>
                </a>

                <ul className={s.linkList}>
                    {links.map((link) => (
                        <li
                            key={link.url}
                            className={classNames(
                                s.linkList__item,
                                { [s['-active']]: activePage === link.componentName },
                            )}
                        >
                            <a href={link.url}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    activePage: PropTypes.string,
    className: PropTypes.string,
};

export default Header;

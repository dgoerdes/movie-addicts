import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Film, Tv } from 'react-feather';
import s from './Navigation.module.scss';

const links = [
    {
        url: '/movies',
        componentName: 'Movies',
        label: 'Movies',
        icon: <Film />,
    },
    {
        url: '/tv-shows',
        componentName: 'TvShows',
        label: 'TV Shows',
        icon: <Tv />,
    }
];

const Navigation = ({ activePage, mobileNav }) => {
    return (
        <nav className={s.wrapper}>
            <ul
                className={classNames(
                    s.linkList,
                    {[s['-isMobile']]: mobileNav}
                )}
            >
                {links.map((link) => (
                    <li
                        key={link.url}
                        className={classNames(
                            s.linkList__item,
                            { [s['-active']]: activePage === link.componentName },
                        )}
                    >
                        <a href={link.url}>
                            {mobileNav ? link.icon : null}
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    activePage: PropTypes.string,
    mobileNav: PropTypes.bool,
};

export default Navigation;

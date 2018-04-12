import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Activity, WifiOff, Wifi } from 'react-feather';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.scss';

const Header = ({ className, activePage, mobileNav, networkOffline }) => {
    return (
        <header className={classNames(className, s.wrapper)}>
            <a href="/" className={s.brand}>
                <Activity className={s.brand__logo} />
                <span className={s.brand__name}>
                    Movie Addicts
                </span>
            </a>

            <div className={classNames(s.nav, {[s['-mobile']]: mobileNav})}>
                <Navigation activePage={activePage} mobileNav={mobileNav} />

                <div className={s.networkIndicator}>
                    {networkOffline ? <WifiOff /> : <Wifi />}
                    {networkOffline ? 'Offline' : 'Online'}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    activePage: PropTypes.string,
    mobileNav: PropTypes.bool,
    className: PropTypes.string,
};

export default Header;

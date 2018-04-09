import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Wifi, WifiOff } from 'react-feather';
import s from './Footer.module.scss';

const Footer = ({ className, networkOffline }) => {
    return (
        <footer className={classNames(className, s.wrapper)}>
            <div className={s.networkIndicator}>
                {networkOffline
                    ? <WifiOff />
                    : <Wifi />
                }
            </div>
        </footer>
    );
};

Footer.propTypes = {
    networkOffline: PropTypes.bool,
    className: PropTypes.string,
};

export default Footer;

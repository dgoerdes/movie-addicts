import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LazyLoad from 'react-lazyload';
import styles from './Image.module.scss';

const Image = ({ className, src, alt, width, height, lazy, lazyOnce, lazyOffset, draggable }) => {
    if (lazy) {
        return (
            <LazyLoad height={height} once={lazyOnce} offset={lazyOffset}>
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={classNames(className, styles.wrapper)}
                    draggable={draggable}
                />
            </LazyLoad>
        );
    } else {
        return (
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={classNames(className, styles.wrapper)}
                draggable={draggable}
            />
        );
    }
};

Image.defaultProps = {
    lazy: true,
    lazyOnce: true,
    lazyOffset: 0,
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    draggable: PropTypes.bool,
    lazy: PropTypes.bool,
    lazyOnce: PropTypes.bool,
    lazyOffset: PropTypes.number,
    className: PropTypes.string,
};

export default Image;

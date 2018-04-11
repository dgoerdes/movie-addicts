import React from 'react';
import styles from './Paragraph.module.scss';

const Paragraph = ({ children }) => {
    return (
        <p className={styles.wrapper}>
            {children}
        </p>
    );
};

Paragraph.propTypes = {};

export default Paragraph;

import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import Footer from '../../components/Footer/Footer';
import s from './Shell.module.scss';

const Shell = ({ networkOffline }) => {
    return (
        <div className={s.shell}>
            <header className={s.shell__header}>
                HEADER
            </header>

            <main className={s.shell__main}>
                ...
            </main>

            <Footer networkOffline={networkOffline} className={s.shell__footer} />
        </div>
    );
};

export default connect(
    {
        networkOffline: state`userAgent.network.offline`,
    },
    Shell
);

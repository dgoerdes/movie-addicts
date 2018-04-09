import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorInternal from '../ErrorInternal/ErrorInternal';
import s from './Shell.module.scss';

const Loader = () => (
    <div>loading ...</div>
);

class Shell extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activePage: null,
        };
    }

    componentWillMount() {
        this.requestComponentChunk(this.props.activePage);
    }

    componentWillUpdate(nextProps) {
        if (this.props.activePage === nextProps.activePage) return;

        this.requestComponentChunk(nextProps.activePage);
    }

    requestComponentChunk(componentName) {
        if (!componentName) return;

        import(`../${componentName}/${componentName}`)
            .then((res) => this.setState({ activePage: res.default }))
            .catch(() => this.setState({ activePage: ErrorInternal }));
    };

    render() {
        const { networkOffline, activePage } = this.props;
        const ActivePage = this.state.activePage;

        return (
            <div className={s.shell}>
                <Header className={s.shell__header} activePage={activePage} />

                <main className={s.shell__main}>
                    {ActivePage
                        ? <ActivePage />
                        : <Loader />
                    }
                </main>

                <Footer networkOffline={networkOffline} className={s.shell__footer} />
            </div>
        );
    }
}

export default connect(
    {
        activePage: state`app.activePage`,
        networkOffline: state`userAgent.network.offline`,
    },
    Shell
);

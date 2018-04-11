import React from 'react';
import { connect } from '@cerebral/react';
import { state } from 'cerebral/tags';
import classNames from 'classnames';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ErrorInternal from '../ErrorInternal/ErrorInternal';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
import s from './Shell.module.scss';


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
        const { networkOffline, activePage, mediaQueries } = this.props;
        const ActivePage = this.state.activePage;

        return (
            <div className={classNames(s.shell, { [s['-hasMobileNav']]: mediaQueries.small })}>
                <Header activePage={activePage} mobileNav={mediaQueries.small} networkOffline={networkOffline} />

                <main>
                    {ActivePage
                        ? <ActivePage />
                        : <LoadingIndicator />
                    }
                </main>

                <Footer />
            </div>
        );
    }
}

export default connect(
    {
        activePage: state`app.activePage`,
        networkOffline: state`userAgent.network.offline`,
        mediaQueries: state`userAgent.media`
    },
    Shell
);

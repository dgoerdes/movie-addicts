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
            loadingChunk: false,
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

        this.setState({ loadingChunk: true });
        import(`../${componentName}/${componentName}`)
            .then((res) => this.setState({ activePage: res.default, loadingChunk: false }))
            .catch(() => this.setState({ activePage: ErrorInternal, loadingChunk: false }));
    };

    render() {
        const { networkOffline, activePage, mediaQueries, pageTransitioning } = this.props;
        const ActivePage = this.state.activePage;

        return (
            <div className={classNames(s.shell, { [s['-hasMobileNav']]: mediaQueries.small })}>
                <Header activePage={activePage} mobileNav={mediaQueries.small} networkOffline={networkOffline} />

                <div className={s.shell__sticky}>
                    <main className={s.shell__stickyContent}>
                        {(pageTransitioning || this.state.loadingChunk)
                            ? <LoadingIndicator />
                            : ActivePage ? <ActivePage /> : null
                        }
                    </main>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default connect(
    {
        activePage: state`app.activePage`,
        pageTransitioning: state`app.transitioning`,
        networkOffline: state`userAgent.network.offline`,
        mediaQueries: state`userAgent.media`
    },
    Shell
);

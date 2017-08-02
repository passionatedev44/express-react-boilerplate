import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createMuiTheme from 'material-ui/styles/theme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppContainer} from 'react-hot-loader';

// Import custom components
import store from './store/store';
import MainRouter from './routers/routes';

const mountNode = document.getElementById('root');
const theme = createMuiTheme();


const renderApp = () => {
    ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <Provider store={store}>
                <MainRouter />
            </Provider>
        </MuiThemeProvider>,
        mountNode
    );
};

renderApp();

// Hot Module Replacement of react components
if (module.hot) {
    module.hot.accept('./routers/routes', () => {
        const HotMainRouter = require('./routers/routes').default;
        ReactDOM.render(
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <HotMainRouter />
                </Provider>
            </MuiThemeProvider>,
            mountNode
        );
    });
}
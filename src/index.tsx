import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { getStore } from './redux/store';
import { defaultState } from './redux/models/state'; 

import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import MyProfile from './components/MyProfile/MyProfile';

import { observeAuthState, subscribeToUsers } from './redux/actions/actionCreators';

import './index.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = getStore(defaultState);

store.dispatch(observeAuthState()); // listen for auth-state changes
store.dispatch(subscribeToUsers()); // listen for new users

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Router>
          <Switch>
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/my-profile" component={MyProfile} />
          </Switch>
        </Router>
        <ToastContainer position="bottom-center"/>
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

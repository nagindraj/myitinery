import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';
import Test from './test';
import Cities from './cities/cities';
import Itineraries from './itineraries';
import 'bootstrap/dist/css/bootstrap.min.css';


class Routing extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Test} />
                        <Route path="/cities" component={Cities} />
                        <Route path="/itineraries/:city" component={Itineraries} />
                    </div>
                </Router>
            </Provider>
        )
    }
}

ReactDOM.render(<Routing/> , document.querySelector('#root'))
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './app';
import Test from './test';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/login" component={Test} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing/> , document.querySelector('#root'))
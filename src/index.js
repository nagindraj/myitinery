import React from 'react';
import ReactDOM from 'react-dom';
import Header from './oldheader';
import Main from './oldmain';
import Footer from './oldfooter';

const App = () => {
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<App/> , document.querySelector('#root'))
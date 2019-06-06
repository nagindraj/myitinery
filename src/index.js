import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';

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
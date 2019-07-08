import React from 'react';
import Header from './header';
import Main from './main/main';
import Footer from './footer';

class App extends React.Component {
    handlePrint(event) {
        console.log(event.target);
    }

    render() {
        return (
            <div>
                <Header/>
                <Main print= {this.handlePrint}/>
                <Footer/>
            </div>
        );
    }
};

export default App;
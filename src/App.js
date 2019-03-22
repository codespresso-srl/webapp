import React, {Component} from 'react';
import Header from './Header';
import Page1 from './Page1';
import Footer from './Footer';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header myValue={"test asda"}/>
                <Page1/>
                <Footer/>
            </div>
        );
    }

}

export default App;

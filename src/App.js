import logo from './logo.svg';
import './App.css';
import DetentionStatement from './components/DetentionStatement'
import React, { Component } from 'react';
import reactDom from 'react-dom';

class App extends Component {
    createDetentionStatements = () => {
        let statements = [];

        for (let i = 0; i < 100; i++) {
            statements.push(<DetentionStatement />)
        }

        return statements;
    }

    render() {
        return (
            <div className="App" >
                {this.createDetentionStatements()}
            </div>
        );
    }
}

export default App;

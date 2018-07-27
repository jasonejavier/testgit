import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './Main';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/login' component={Main} />
                <Route path='/' component={Main} />
            </div>
        );
    }
}



export default App;
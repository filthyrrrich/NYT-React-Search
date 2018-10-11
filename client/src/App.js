import React from 'react';
import { Nav } from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';

const App = () => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/article' component={Home} />
                <Route exact path='/article/:id' component={Saved} />
            </Switch>
        </div>
    </Router>
);

export default App;
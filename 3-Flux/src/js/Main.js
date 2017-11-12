import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Settings from './pages/Settings';
import TodoList from './pages/TodoList';

class Main extends React.Component{    
    render(){
        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <div>
                <Navigation {...this.props}/>
                <div class="container" style={containerStyle}>
                    <div class="row">
                        <div class="col-lg-12">
                            <Switch>
                                <Route exact path='/' render={props => <Featured {...props} />} />
                                <Route path='/featured' render={props => <Featured {...props} />} />
                                <Route path='/archives' render={props => <Archives {...props} />} />
                                <Route path='/settings' render={props => <Settings {...props} />} />
                                <Route path='/todos' render={props => <TodoList {...props} />} />                   
                            </Switch>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default Main;

{/*<BrowserRouter>
                    <Switch>
                        <Route exact path='/' render={props => <Featured {...props} />} />                    
                        <Route exact path='/featured' render={props => <Featured {...props} />} />
                        <Route exact path='/archives' render={props => <Archives {...props} />} />
                        <Route exact path='/settings' render={props => <Settings {...props} />} />
                        <Route path='/' render={props => <Featured {...props} />} />
                    </ Switch>
                </BrowserRouter>*/}
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component{
    constructor(){
        super();
        this.state = {
            collapsed: true
        };
    }
    
    toggleMenu(){
        console.log('toggle menu');
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }

    
    render(){
        const { collapsed } = this.state;
        const menuCssClass = collapsed ? 'collapse' : '';
        
        const {location} = this.props;
        const featuredClass =  location.pathname.match(/^\/featured/) ? "active" : "";
        const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const todoClass = location.pathname.match(/^\/todos/) ? "active" : "";
        
        console.log(this.props);
        return (
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" onClick={this.toggleMenu.bind(this)}>
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                </div>
                <div class={menuCssClass +  ' navbar-collapse'} id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                    <li class={featuredClass}>
                        <Link to='/featured' onClick={this.toggleMenu.bind(this)}>Featured</Link>
                    </li>
                    <li class={archivesClass}>
                        <Link to='/archives' onClick={this.toggleMenu.bind(this)}>Archives</Link>
                    </li>
                    <li class={settingsClass}>
                        <Link to='/settings' onClick={this.toggleMenu.bind(this)}>Settings</Link>
                    </li>
                    <li class={todoClass}>
                        <Link to='/todos' onClick={this.toggleMenu.bind(this)}>To-do</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        );
    }
} 

export default Navigation;
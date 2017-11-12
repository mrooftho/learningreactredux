import React, {Component} from 'react';

import Todo from '../components/Todo';

import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

class TodoList extends Component{

    constructor(){
        super();
        this.retreiveTodos = this.retreiveTodos.bind(this);
        this.state = {
            todos: TodoStore.retreive()
        };
    }

    componentWillMount(){
        console.log('MOUNT');

        TodoStore.on("change", this.retreiveTodos);
        if (!TodoStore.loaded()){
            TodoActions.load('TodoList');    
        }
        
    }
    
    componentWillUnmount(){
        console.log('UN-MOUNT');
        
        TodoStore.removeListener("change", this.retreiveTodos);
    }

    loadTodos(){
        TodoActions.load('TodoList');
    }

    retreiveTodos(){
        this.setState({
            todos: TodoStore.retreive()
        });
    }


    render(){
        const {todos} = this.state;
        const {todosLoaded} = this.state;

        const toDoComponents = todos.map(
            t => <Todo key={t.id} text={t.text} status={t.status} />
        );

        return (
            <div>
                <h1>My to do list</h1>
                <ul>
                    {toDoComponents}
                </ul>
                <button onClick={this.loadTodos.bind(this)}>Reload</button>
            </div>
        );
    }
}
export default TodoList;
import React,{Component} from 'react';

class Todo extends Component{
    render(){
        const {text,status} = this.props;

        if (status ==='edit'){
            return (
                <li>
                    <input defaultValue={text} />
                    <button>Save</ button>
                </li>
            );
        } else {
            return( 
                <li>
                    <span>{text}</span>
                    <span>{status}</span>
                </li>
            );    
        }
        
    }
}
export default Todo;
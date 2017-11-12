import {EventEmitter} from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter{
    constructor(){
        console.log(`TODO-STORE Constructor - create initial todo array`);
        super();
        //Initial to-do list
        this.todoArr = [];
        this.todoLoaded = false;
    }

    loaded(){
        console.log(this.todoLoaded);
        return this.todoLoaded;
    }

    create(text){
        console.log(`TODO-STORE Create ${text}`);
        const id = Date.now();
        this.todoArr.push({id,text,status: 'open'});
        this.emit('change');
    }

    edit(id,text){
        console.log(`TODO-STORE Edit ${id} ${text}`);
        //todo
    }

    remove(id){
        //todo
        console.log(`TODO-STORE Remove ${id}`);
    }

    actionHandler(a){
        console.log(`TODO-STORE Action handler ${a}`);
        switch(a.type){
            case 'CREATE_TODO':{
                this.create(a.payload);
                break;
            }
            case 'RECEIVE_TODOS':{
                this.todoArr = [...a.payload];
                this.todoLoaded = true;
                this.emit('change');
                break;
            }
        }
    }

    retreive(){
        console.log(`TODO-STORE Retreive`);
        return this.todoArr;
    }

}

console.log(`Create new todo store`);
const toDoStore = new TodoStore();
console.log(`Register todo store with dispatcher`);
dispatcher.register(toDoStore.actionHandler.bind(toDoStore));

export default toDoStore;
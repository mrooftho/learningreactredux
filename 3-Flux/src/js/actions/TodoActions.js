import dispatcher from '../dispatcher';

import actionBulder from './Action';

export function create(source,text){
    console.log(`TODO-ACTION CREATE_TODO ${source} ${text}`);
    dispatcher.dispatch(new actionBulder(source,'CREATE_TODO',text));
}

export function remove(source,id){
    console.log(`TODO-ACTION DELETE_TODO ${source} ${id}`);
    dispatcher.dispatch(new actionBulder(source,'DELETE_TODO',id));    
}

export function edit(source,id,text){
    console.log(`TODO-ACTION edit ${source} ${id} ${text}`);
}


export function load(source){
    console.log(`TODO-ACTION FETCH_TODOS ${source}`);
    dispatcher.dispatch(new actionBulder(source,'FETCH_TODOS'));    
    setTimeout(() => {
        console.log(`TODO-ACTION RECEIVE_TODOS ${source}`);
        dispatcher.dispatch(
            new actionBulder(source,'RECEIVE_TODOS',
            [
                {id: 100, text: 'Async 1', status: 'complete'},
                {id: 101,text: 'Async 2', status: 'open'},
                {id: 102,text: 'Async 3', status: 'open'}
            ]
        ));                
    },5000);
}
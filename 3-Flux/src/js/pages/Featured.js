import React from 'react';

import Add from '../components/Add';
import Articles from '../components/ArticleList';

class Featured extends React.Component{


    render(){
        const articles = ['Title 1','Title 2','Title 3','Title 4','Title 5','Title 6','Title 7'];
        return (
            <div>
                <h1>Featured</h1>
                <Add add='Text' />
                <Articles articles={articles}/>
            </div>
        );
    }
}
export default Featured;
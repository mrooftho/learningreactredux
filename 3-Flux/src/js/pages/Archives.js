import React from 'react';
import Articles from '../components/ArticleList';
class Archives extends React.Component{
     

    render(){
        const articles = ['Archive 1','Archive 2','Archive 3','Archive 4','Archive 5','Archive 6','Archive 7'];

        return (
            <div>
                <h1>Archives</h1>
                <Articles articles={articles} />
            </div>
        );
    }
}
export default Archives;
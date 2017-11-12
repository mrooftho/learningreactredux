import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component{
    render(){

        const {articles} = this.props;

        const articleArr = articles.map((title,i)=> <Article key={i} title={title} synopsis='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe rem nisi accusamus error velit animi non ipsa placeat. Recusandae, suscipit, soluta quibusdam accusamus a veniam quaerat eveniet eligendi dolor consectetur.'/> );


        return (
            <div class="row">
                {articleArr}
            </div>
        );
    }
}
export default ArticleList;
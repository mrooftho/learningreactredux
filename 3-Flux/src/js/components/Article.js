import React,{Component} from 'react';

class Article extends Component{
    render(){
        const {title,synopsis} = this.props;


        return (
                <div class="col-md-4">
                    <h2>{title}</h2>
                    <p>{synopsis}</p>
                    <a class="btn btn-default" href="#">More Info</a>
                </div>
        );
    }
}
export default Article;
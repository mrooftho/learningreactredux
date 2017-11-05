import React, {Component} from 'react';

class add extends Component{
    render(){

        const {add}= this.props;

        return (
            <div class="row">
                <div class="col-lg-12">
                    <div class="well text-center">
                        {add}
                    </div>
                </div>
            </div>
        );
    }
}
export default add;
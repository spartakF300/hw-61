import React,{Component,Fragment} from 'react';
import './Country.css'
class Country extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.name !== this.props.name
    }

    render() {
        return (
            <Fragment>
                <li className="name" onClick={this.props.onclick}>{this.props.name}</li>
            </Fragment>
        );

    }
};

export default Country;
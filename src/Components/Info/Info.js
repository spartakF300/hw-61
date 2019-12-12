import React, {Component , Fragment} from 'react';
import './Info.css'
class Info extends Component {
    render() {

        return this.props.info.name ? (
            <Fragment>
                <div className="info-wrap">
                <img src={this.props.info.flag} alt=""/>
                <div>
                <p>Name: {this.props.info.name}</p>
                <p>Capital: {this.props.info.capital}</p>
                <p>Population: {this.props.info.population}</p>
                </div>
                </div>
                {this.props.info.borders ? <ul className="list-info">
                    <li className="title">Border With:</li>
                    {this.props.info.borders.length ? this.props.info.borders.map((name, index) => {
                        return <li className="borders" key={index}>{name}</li>
                    }) : <li>No Borders</li>}
                </ul> : null}
            </Fragment>
        ):null;

    }
}

export default Info;
import React, {Component} from 'react';
import axios from 'axios'
import './App.css'
import Country from "./Components/Country/Country";
import Info from "./Components/Info/Info";

class App extends Component {
    state = {
        country: [],
        info: [],
    };
    getCountry = async () => {
        const url = 'https://restcountries.eu/rest/v2/all?fields=name;alpha3Code';
        const response = await axios.get(url);
        const country = response.data.map((name) => {
            return {name: name.name, alpha3Code: name.alpha3Code}
        });

        this.setState({country});
    };

    countryInfo = async (code) => {
        const url = 'https://restcountries.eu/rest/v2/alpha/' + code;
        const response = await axios.get(url);
        let nameCountry = [];
        if (response.data.borders) {
            const country = [];
            for (const border of response.data.borders) {
                const name = await axios.get('https://restcountries.eu/rest/v2/alpha/' + border);
                country.push(name.data)
            }
            nameCountry = country.map((name) => name.name);
        }
        let info = response.data;
        info.borders = nameCountry;
        this.setState({info});

    };

    componentDidMount = async () => {
        this.getCountry()
    };

    render() {
        return (
            <div className="App">
                <ul className={'name-wrap'}>
                    {this.state.country.map((name, index) => {
                        return <Country
                            name={name.name}
                            key={index}
                            onclick={() => this.countryInfo(name.alpha3Code)}
                        />
                    })}

                </ul>
                <div className="wrapper-info">
                    <Info
                        info={this.state.info}
                    />
                </div>
            </div>
        );
    }
}

export default App;
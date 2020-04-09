import React from 'react';

class Form extends React.Component{

    state = {
        countries : [],
        selectedCountry : undefined,
        cities:[]
    }

    componentDidMount() {
        const url = "http://localhost:3002/countries";
        fetch(url,{
            method: 'GET',
            MODE: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => this.setState({countries: json}));
    }

    countryChange = async(event) => {
        event.preventDefault();
        const{value} = event.target;
        const url = `http://localhost:3002/cities/${value}`;
        fetch(url,{
            method: 'GET',
            MODE: 'cors',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => this.setState({cities: json}));
    }

    render() {
        const {countries} = this.state;
        const {cities} = this.state;

        return (
            <form onSubmit={this.props.getWeather}>

                <select name="country" onChange={this.countryChange}>
                    {countries.map(country =>
                        <option name="countryName">{country}</option>
                    )};
                </select>

                <select name="city">
                    {cities.map(city =>
                        <option name="cityName">{city}</option>
                    )};
                </select>

            <button> Get Temperature </button>
            </form>
        );
    }
}
export default Form;

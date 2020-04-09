import React from 'react';
import Title from './components/Title'
import Form from './components/Form'
import Weather from "./components/Weather";

const API_KEY = 'f910524e5c87298325e72c994ef16b20';
class App extends React.Component{

    state = {
        temperature: undefined,
        error: undefined
    }

    getWeather = async(event) => {

        event.preventDefault();
        const city = event.target.city.value;
        const country = event.target.country.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}
        &appid=${API_KEY}&units=metric`);
        const data = await api_call.json();

        if(city && country) {
            console.log(data);
            this.setState({
                temperature: data.main.temp,
                error: ""
            })
        }else{
            this.setState({
                temperature: undefined,
                error: "Please enter the values"
            })
        }
    }

  render() {
    return (
        <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-xs-5 title-container">
                        <Title />
                    </div>
                    <div className="col-xs-7 form-container">
                      <Form getWeather={this.getWeather} />
                      <Weather
                        temperature = {this.state.temperature}
                        error={this.state.error}
                      />
                    </div>
                </div>
                </div>
            </div>
          </div>
          </div>
    );
  }
};

export default App;

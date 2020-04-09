import React from 'react';

const Weather = props => (
        <div>
        {props.temperature && <p>Temprature : {props.temperature}'C</p>}
        {props.error && <p>{props.error}</p>}
    </div>
    );

export default Weather;

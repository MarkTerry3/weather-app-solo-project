import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  const dispatch = useDispatch();
  const weatherText = useSelector(store => store.currentConditions.currentWeatherText);
  const temperature = useSelector(store => store.currentConditions.currentTemp);


const fetchWeather = () => {
  axios.get('/api/weather')
    .then(response => {
      console.log('weather text is', response.data[0]);
      dispatch({
        type: "CURRENT_TEMP",
        payload: response.data[0].Temperature.Imperial.Value
      })
      dispatch({
        type: "CURRENT_WEATHER_TEXT",
        payload: response.data[0].WeatherText
      })
    }).catch(err => {
      console.log(err);
    })
    console.log(temperature);
    console.log(weatherText);

}





  return (
    <div className="container">
      <p>Home Page</p>

      <Button style={{backgroundColor: "teal"}}variant="contained" onClick={fetchWeather}>Current Weather</Button>
      <p>Current Temperature in Saint Paul, MN :  {temperature} and {weatherText}</p>
    </div>
  );
}

export default InfoPage;

import React, {useEffect} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {


  useEffect(() => {
    // dispatch({
    //   type: 'SET_CURRENT_WEATHER'
    // })
  }, [])



  const dispatch = useDispatch();
  const weatherText = useSelector(store => store.currentConditions.currentWeatherText);
  const temperature = useSelector(store => store.currentConditions.currentTemp);
  const userOne = useSelector(store => store.user.id);




const fetchWeather = () => {

      dispatch({
      type: 'SET_CURRENT_WEATHER'
    })

    console.log('user ID is:', userOne);
    console.log('temp is:', temperature);
    console.log('weatherText is:', weatherText);

    
  // axios.get('/api/weather')
  //   .then(response => {
  //     console.log('weather text is', response.data[0]);
  //     dispatch({
  //       type: "CURRENT_TEMP",
  //       payload: response.data[0].Temperature.Imperial.Value
  //     })
  //     dispatch({
  //       type: "CURRENT_WEATHER_TEXT",
  //       payload: response.data[0].WeatherText
  //     })
  //     console.log('temp is', temperature);
  //     console.log('weatherText is', weatherText);
  //   }).catch(err => {
  //     console.log(err);
  //   })


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

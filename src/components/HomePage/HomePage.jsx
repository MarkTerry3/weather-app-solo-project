import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FiveDayForecast from '../FiveDayForecasts/FiveDayForecasts.jsx';






function HomePage() {


  useEffect(() => {
    // dispatch({
    //   type: 'SET_CURRENT_WEATHER'
    // })
    console.log(userLoggedIn);
  }, [])



  const dispatch = useDispatch();
  const weatherText = useSelector(store => store.currentConditions.currentWeatherText);
  const temperature = useSelector(store => store.currentConditions.currentTemp);
  const fiveDayForecast = useSelector(store => store.currentConditions.fiveDayForecastAPI);
  const userOne = useSelector(store => store.user.id);
  const userLoggedIn = useSelector(store => store.user);
  const userLocInfo = useSelector(store => store.currentConditions.userInformation)


  // 

  const fetchWeather = () => {

    dispatch({
      type: 'SET_CURRENT_WEATHER'
    })

    console.log('user ID is:', userOne);
    console.log('temp is:', temperature);
    console.log('weatherText is:', weatherText);
    console.log('five day below this');
    console.log('five day forecast is: ', fiveDayForecast);

  }




  return (
    <div className="container">
      <p className="welcomeUser">Welcome, {userLoggedIn.username} !</p>

      <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={fetchWeather}>Current Weather</Button>
      <p>Current Temperature in {userLocInfo} :  {temperature} and {weatherText}</p>
      <Grid container spacing={2} sx={{ width: '70%', height: '300px', margin: 'auto' }}>
        <Grid item xs={4} >
          <Paper sx={{ height: '300px' }}>hyello Left</Paper>
        </Grid>
        <Grid item xs={8} >
          <Paper sx={{ height: '300px' }}> hyello Right</Paper>
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={2} sx={{ width: '70%', margin: 'auto' }}>
        {fiveDayForecast.map((day, i) => {
          return (
            <FiveDayForecast key={i} day={day} />
          )
        })}
      </Grid>
    </div>
  );
}

export default HomePage;




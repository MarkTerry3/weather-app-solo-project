import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FiveDayForecast from '../FiveDayForecasts/FiveDayForecasts.jsx';
import Image from '../../weatherTextImages/mostly-clear.png'





function HomePage() {


  useEffect(() => {
    // dispatch({
    //   type: 'SET_CURRENT_WEATHER'
    // })
    console.log(userLoggedIn);
    console.log(dayImage);
  }, [])



  const dispatch = useDispatch();
  const weatherText = useSelector(store => store.currentConditions.currentWeatherText);
  const temperature = useSelector(store => store.currentConditions.currentTemp);
  const fiveDayForecast = useSelector(store => store.currentConditions.fiveDayForecastAPI);
  const userOne = useSelector(store => store.user.id);
  const userLoggedIn = useSelector(store => store.user);
  const userLocInfo = useSelector(store => store.currentConditions.userInformation)
  const realFeel = useSelector(store => store.currentConditions.realFeelReducer)
  const wind = useSelector(store => store.currentConditions.windReducer)
  const windChill = useSelector(store => store.currentConditions.windChillReducer)
  const humidity = useSelector(store => store.currentConditions.humidityReducer)
  const precipitation = useSelector(store => store.currentConditions.precipitationReducer)
  const visibility = useSelector(store => store.currentConditions.visibilityReducer)
  const cloudCover = useSelector(store => store.currentConditions.cloudCoverReducer)



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


const dayImage = () => {
  // let dayImageO;

  // if (weatherText === "Mostly clear") {
  //   dayImage = '../../weatherTextImages/mostly-clear.png'
  //   console.log(dayImageO);
  // }
  console.log('wind is', wind);
}


const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`
  }
};







  return (
    <div className="container">
      <h1 className="welcomeUser">Welcome, {userLoggedIn.username} !</h1>

      <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={fetchWeather}>Current Weather</Button>
      <p>Current Temperature in {userLocInfo} :  {temperature} and {weatherText}</p>
      <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
        <Grid item xs={4} >
          <Paper sx={{ height: '325px'}}>
            <h1>Day Temp?</h1>
          <h2 className="userLocation">{weatherText}</h2>
          <h1 className="userLocation">{temperature}℉</h1>
          <img width="100px" src={require('../../weatherTextImages/mostly-clear.png')}/>
          <h1>Night Temp?</h1>
          </Paper>
        </Grid>
        <Grid item xs={8} >
          {/* <Paper sx={{ height: '325px' }} style={styles.paperContainer}> */}
          <Paper sx={{ height: '325px' }}>
          <h1 className="userLocation"> {userLocInfo}  </h1>
          <h3 className="userLocation">{temperature}℉ & {weatherText}</h3>
          <p>Real Feel:{realFeel} ℉</p>
          <p>Wind: {wind} mph</p>
          <p>Wind Chill: {windChill} ℉</p>
          <p>Humidity: {humidity} ℉</p>
          <p>Precipitation: {precipitation} in</p>
          <p>Visibility: {visibility} mi</p>
          <p>Cloud Cover: {cloudCover}%</p>
          </Paper>
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
      {/* <img width="100px" src={require(dayImage)}/> */}
      <button onClick={dayImage}>dayImage</button>
    </div>
  );
}

export default HomePage;




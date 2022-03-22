import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FiveDayForecast from '../FiveDayForecasts/FiveDayForecasts.jsx';
import Image from '../../weatherTextImages/BLUR_rain.jpg'
import ImageTwo from '../../weatherTextImages/BLUR_2-saint-paul-skyline-joe-mamer.jpg'
import { textAlign } from '@mui/system';





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
  }


const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      color: 'white'
  },
  paperContainerRight: {

    color: 'white',
  }
};



  return (
    <div className="container">
      <h1 className="welcomeUser">Welcome, {userLoggedIn.username} !</h1>

      <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={fetchWeather}>Current Weather</Button>
      <p>Current Temperature in {userLocInfo} :  {temperature} and {weatherText}</p>
      <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
        <Grid item xs={4} >
          <Paper className="paperContainerLeft" sx={{ height: '325px'}} style={styles.paperContainer} >
            <h1 className="dayTime">Day Temp?</h1>
          <h2 className="userLocation">{weatherText}</h2>
          <h1 className="userLocation">{temperature}℉</h1>
          {/* <img width="100px" src={require('../../weatherTextImages/mostly-clear.png')}/> */}
          <h1 className="nightTime">Night Temp?</h1>
          </Paper>
        </Grid>
        <Grid item xs={8} >
          {/* <Paper sx={{ height: '325px' }} style={styles.paperContainer}> */}
          <Paper className="paperContainerRight" sx={{ height: '325px' }} style={styles.paperContainerRight} >
          <h1 className="userLocation"> {userLocInfo}  </h1>
          <h3 className="userLocation">{temperature}℉ & {weatherText}</h3>
          <ul className="floatRight">
          <li> Real Feel <span className="weatherDataBold">{realFeel}</span>  ℉</li>
          <li>Wind  <span className="weatherDataBold">{wind}</span> mph</li>
          <li>Wind Chill  <span className="weatherDataBold">{windChill}</span> ℉</li>
          </ul>
          <ul className="floatLeft">
          <li>Humidity <span className="weatherDataBold">{humidity}</span> ℉</li>
          <li>Precipitation <span className="weatherDataBold">{precipitation}</span> in</li>
          <li>Visibility <span className="weatherDataBold">{visibility}</span> mi</li>
          <li>Cloud Cover <span className="weatherDataBold">{cloudCover}</span>%</li>
          </ul>
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
    </div>
  );
}

export default HomePage;


// className="dayTime"
// className="nightTime"
// className="weatherDataBold"
// backgroundImage: `url(${ImageTwo})`,
// className="paperContainerRight"
//background-image: url('../../weatherTextImages/2-saint-paul-skyline-joe-mamer.jpeg');
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
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from 'react-router-dom';
import '../../weatherTextImages/sunny.png';
import sunny from '../../weatherTextImages/sunny.png';
import cloudy from '../../weatherTextImages/cloudy.png';
import mostlyCloudy from '../../weatherTextImages/mostly-cloudy.png';
import tstorms from '../../weatherTextImages/tstorms.png';
import moon from '../../weatherTextImages/clear.png';




function HomePage() {

// use this to set off the saga to GET weather data from the API
  useEffect(() => {
    dispatch({
      type: 'SET_CURRENT_WEATHER'
    })
    console.log(userLoggedIn);
  }, [])

  // to direct user to a diff page, and to use sagas
  const history = useHistory();
  const dispatch = useDispatch();

  // accessing our reducers to use the data from the Accuweather API
  const dayText = useSelector(store => store.currentConditions.currentWeatherText);
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
  const nightText = useSelector(store => store.currentConditions.nightTimeTextReducer)
  const nightTemperature = useSelector(store => store.currentConditions.nightTimeTemperatureReducer)


  // sets off a saga to GET our data from the API, then sets reducers with that data - used on a button to save the amount of GETS left with our API key
  const fetchWeather = () => {

    dispatch({
      type: 'SET_CURRENT_WEATHER'
    })
  }

  // pushes you to the radarView page
  const radarView = () => {
    // console.log('you clicked radar view');
    history.push('/radar');
  }

  // pushes you to the hourly casts page
  const hourlyCast = () => {
    // console.log('you clicked hourly cast');
    history.push('/hourly');
  }

  // styling the left and right TOP sides of our home page
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      color: 'white'
    },
    paperContainerRight: {

      color: 'white',
    }
  };


  // function to conditionally render whichever picture matches best with the weather description - Day Time
  function weatherImage(text) {
    console.log(text);

    if (text === 'Sunny' || text === 'Mostly sunny' || text === 'Hazy sunshine' || text === 'Partly sunny w/ flurries' || text === 'Clear' || text === 'Mostly clear') { //sunny
      return sunny;
    } if (text === 'Intermittent clouds' || text === 'Mostly cloudy' || text === 'Cloudy' || text === 'Dreary (Overcast)' || text === 'Flurries' || text === 'Mostly cloudy w/ flurries' || text === 'Snow' || text === 'Freezing rain' || text === 'Partly sunny') {     //cloudy
      return cloudy;
    } if (text === 'Fog' || text === 'Mostly cloudy w/ snow' || text === 'Partly cloudy' || text === 'Intermittent clouds') {  //partly cloudy
      return mostlyCloudy;
    } if (text === 'Showers' || text === 'Mostly cloudy w/ showers' || text === 'Partly sunny w/ showers' || text === 'T-storms' || text === 'Mostly cloudy w/ t-storms' || text === 'Partly sunny w/ t-storms' || text === 'Rain' || text === 'Ice' || text === 'Sleet' || text === 'Rain and snow' ||
      text === 'Partly cloudy w/ showers' || text === 'Mostly cloudy w/ showers' || text === 'Partly cloudy w/ t-storms' || text === 'Mostly cloudy w/ t-storms' || text === 'Mostly cloudy w/ flurries' || text === 'Mostly cloudy w/ snow' || text === 'Light rain') { //rainy
      return tstorms;
    }
  }

// function to conditionally render whichever picture matches best with the weather description - Night Time
  function weatherImageNight(text) {
    console.log(text);

    if (text.includes('clear') || text === 'Mostly clear' || text === 'Sunny' || text === 'Mostly sunny' || text === 'Hazy sunshine' || text === 'Partly sunny w/ flurries' || text === 'Clear'  ) { //sunny
      return moon;
    } if (text === 'Intermittent clouds' || text === 'Mostly cloudy' || text === 'Cloudy' || text === 'Dreary (Overcast)' || text === 'Flurries' || text === 'Mostly cloudy w/ flurries' || text === 'Snow' || text === 'Freezing rain' || text === 'Partly sunny') {     //cloudy
      return cloudy;
    } if (text === 'Fog' || text === 'Mostly cloudy w/ snow' || text === 'Partly cloudy' || text === 'Intermittent clouds') {  //partly cloudy
      return mostlyCloudy;
    } if (text === 'Showers' || text === 'Mostly cloudy w/ showers' || text === 'Partly sunny w/ showers' || text === 'T-storms' || text === 'Mostly cloudy w/ t-storms' || text === 'Partly sunny w/ t-storms' || text === 'Rain' || text === 'Ice' || text === 'Sleet' || text === 'Rain and snow' ||
      text === 'Partly cloudy w/ showers' || text === 'Mostly cloudy w/ showers' || text === 'Partly cloudy w/ t-storms' || text === 'Mostly cloudy w/ t-storms' || text === 'Mostly cloudy w/ flurries' || text === 'Mostly cloudy w/ snow' || text === 'Light rain') { //rainy
      return tstorms;
    }
  }

  return (
    <div className="container">
      <h1 className="welcomeUser">Welcome, {userLoggedIn.username} !</h1>
      {/* <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={fetchWeather}>Current Weather</Button> */}
      {/* <p>Current Temperature in {userLocInfo} :  {temperature} and {weatherText}</p> */}
      <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
        <Grid item xs={4} >
          <Tooltip title="Click me for an hourly cast !">
            <Paper className="paperContainerLeft" sx={{ height: '325px' }} style={styles.paperContainer} onClick={hourlyCast} >

              <div className="dayNightData">
                <h4>
                  Today
                </h4>
                <h3>{temperature}℉ & {dayText}</h3>
                <img width="100px" src={weatherImage(dayText)} />

                <h4>
                  Tonight
                </h4>
                <h3>{nightTemperature}℉ & {nightText}</h3>
                <img width="100px" src={weatherImageNight(nightText)} />
              </div>
            </Paper>
          </Tooltip>
        </Grid>
        <Grid item xs={8} >
          <Tooltip title="Click me for a Radar View !">
            {/* <Paper sx={{ height: '325px' }} style={styles.paperContainer}> */}
            <Paper className="paperContainerRight" sx={{ height: '325px' }} style={styles.paperContainerRight} onClick={radarView} >
              <h1 className="userLocation"> {userLocInfo}  </h1>
              <h3 className="userLocation">{temperature}℉ & {dayText}</h3>
              <ul className="floatRight">
                <li> Real Feel <span className="weatherDataBold">{realFeel}</span>  ℉</li>
                <li>Wind  <span className="weatherDataBold">{wind}</span> mph</li>
                <li>Wind Chill  <span className="weatherDataBold">{windChill}</span> ℉</li>
              </ul>
              <ul className="floatLeft">
                <li>Humidity <span className="weatherDataBold">{humidity}</span> %rh</li>
                <li>Precipitation <span className="weatherDataBold">{precipitation}</span> in</li>
                <li>Visibility <span className="weatherDataBold">{visibility}</span> mi</li>
                <li>Cloud Cover <span className="weatherDataBold">{cloudCover}</span>%</li>
              </ul>
            </Paper>
          </Tooltip>
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

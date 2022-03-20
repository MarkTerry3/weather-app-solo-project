import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {

  //   var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
  //     /* No need to set credentials if already passed in URL */
  //     center: new Microsoft.Maps.Location(39.1887643719098, -92.8261546188403),
  //     zoom: 5
  // });
  // // tile url from Iowa Environmental Mesonet of Iowa State University
  // var urlTemplate = 'https://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-{timestamp}/{zoom}/{x}/{y}.png';
  // var timestamps = ['900913-m50m', '900913-m45m', '900913-m40m', '900913-m35m', '900913-m30m', '900913-m25m', '900913-m20m', '900913-m15m', '900913-m10m', '900913-m05m', '900913'];
  // var tileSources = [];
  // for (var i = 0; i < timestamps.length; i++) {
  //     var tileSource = new Microsoft.Maps.TileSource({
  //         uriConstructor: urlTemplate.replace('{timestamp}', timestamps[i])
  //     });
  //     tileSources.push(tileSource);
  // }
  // var animatedLayer = new Microsoft.Maps.AnimatedTileLayer({ mercator: tileSources, frameRate: 500 });
  // map.layers.insert(animatedLayer);

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


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));








  return (
    <div className="container">
      <p>Welcome, {userLoggedIn.username} !</p>

      <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={fetchWeather}>Current Weather</Button>
      <p>Current Temperature in Saint Paul, MN :  {temperature} and {weatherText}</p>
      <ul>
        {fiveDayForecast.map((day, i) => {
          return (
            // <li key={i}>{day.Date} Temperature: {day.Temperature.Maximum.Value}</li>
            <Box sx={{ flexGrow: 1 }}>
              <Grid item xs={100}>
                <Item key={i}>{day.Date}, High: {day.Temperature.Maximum.Value}, Low: {day.Temperature.Minimum.Value}</Item>
              </Grid>
            </Box>
          )
        })}
      </ul>
      {/* // <progress className='progressBar' value={temperature} max='100'></progress>
      // <iframe width="487.5" height="337.5" src="https://embed.windy.com/embed2.html?lat=44.949&lon=-93.043&detailLat=41.902&detailLon=-93.208&width=650&height=450&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=default&radarRange=-1"></iframe>
      // <iframe width="487.5" height="300" src="https://embed.windy.com/embed2.html?lat=44.949&lon=-93.043&detailLat=44.784&detailLon=-93.220&width=650&height=450&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=true&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=mph&metricTemp=%C2%B0F&radarRange=-1"></iframe> */}
    </div>
  );
}

export default InfoPage;




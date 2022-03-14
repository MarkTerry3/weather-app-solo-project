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
  const temp = useSelector(store => store.currentTemp);


const fetchWeather = () => {
  axios.get('/api/weather')
    .then(response => {
      console.log(response.data[0]);
      dispatch({
        type: "CURRENT_TEMP",
        payload: response.data[0].Temperature.Imperial.Value
      })
    }).catch(err => {
      console.log(err);
    })
    // console.log('temp is: ', temp);

}





  return (
    <div className="container">
      <p>Info Page</p>

      <Button style={{backgroundColor: "teal"}}variant="contained" onClick={fetchWeather}>Current Weather</Button>
      <p>Current Temperature in Saint Paul, MN : {temp}</p>
    </div>
  );
}

export default InfoPage;

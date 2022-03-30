import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import snowImage from '../../weatherTextImages/rain-snow.png'
import { useSelector } from 'react-redux';
import sunny from '../../weatherTextImages/sunny.png';
import cloudy from '../../weatherTextImages/cloudy.png';
import mostlyCloudy from '../../weatherTextImages/mostly-cloudy.png';
import tstorms from '../../weatherTextImages/tstorms.png';
import snow from '../../weatherTextImages/snow.png';



// styling for the MUI paper
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

// passing the 5day forecast as a prop
function FiveDayForecast({ day }) {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    // This is how we get the name of the date instead of a big ugly number string;
    const theDate = new Date(day.Date);
    let theFormattedDate = theDate.getDay();
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    // function to conditionally render whichever picture matches best with the weather description
    function weatherImage(text) {

        // console.log(day);
        // console.log(text);

        if (text === 'Sunny' || text === 'Mostly sunny' || text === 'Hazy sunshine' || text === 'Clear' || text === 'Mostly clear') { //sunny
            return sunny;
        } if (text === 'Intermittent clouds' || text === 'Windy' || text === 'Mostly cloudy' || text === 'Cloudy' || text === 'Dreary (Overcast)' || text === 'Flurries' || text === 'Mostly cloudy w/ flurries' || text === 'Freezing rain' || text === 'Partly sunny') {     //cloudy
            return cloudy;
        } if (text === 'Fog' || text === 'Mostly cloudy w/ snow' || text === 'Partly cloudy' || text === 'Intermittent clouds') {  //partly cloudy
            return mostlyCloudy;
        } if (text === 'Showers' || text === 'Mostly cloudy w/ showers' || text === 'Partly sunny w/ showers' || text === 'T-storms' || text === 'Mostly cloudy w/ t-storms' || text === 'Partly sunny w/ t-storms' || text === 'Rain' ||
            text === 'Partly cloudy w/ showers' || text === 'Mostly cloudy w/ showers' || text === 'Partly cloudy w/ t-storms' || text === 'Mostly cloudy w/ t-storms' || text === 'Mostly cloudy w/ flurries' || text === 'Mostly cloudy w/ snow') { //rainy
            return tstorms;
        } if (text === 'Ice' || text === 'Sleet' || text === 'Rain and snow' || text === 'Snow' || text === 'Partly sunny w/ flurries' || text.includes('flurries')) {
            return snow;
        }
    }


    return (
        <>
            <Grid item xs={6} lg={2.4} sx={{ textAlign: 'center' }} >
                <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }}>
                    <Typography>{daysOfWeek[theFormattedDate]} <br /> <img width="100px" src={weatherImage(day.Day.IconPhrase)} /> <br />Hi {day.Temperature.Maximum.Value}℉ <br /> Lo {day.Temperature.Minimum.Value}℉ <br />{day.Day.IconPhrase}</Typography>
                </Paper>
            </Grid>
        </>
    );


}




export default FiveDayForecast;
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




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function FiveDayForecast({ day }) {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };


    // if statement for weatherText Images




    const theDate = new Date(day.Date);
    let theFormattedDate = theDate.getDay();
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];




    // return (
    //     <Grid sx={{ flexGrow: 1 }} container spacing={2}>
    //         <Grid item xs={12}>
    //             <Grid container justifyContent="center" spacing={spacing}>
    //                 {[0].map((value) => (
    //                     <Grid key={value} item>
    //                         <Paper
    //                             sx={{
    //                                 height: 140,
    //                                 width: 100,
    //                                 color: 'white',
    //                                 backgroundColor: '#1A2027'
    //                                 // (theme) =>
    //                                 //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //                             }}
    //                         >
    //                             {day.Date.substring(0, 10)}
    //                             Hi: {day.Temperature.Maximum.Value}
    //                             Lo: {day.Temperature.Minimum.Value}

    //                         </Paper>
    //                     </Grid>
    //                 ))}
    //             </Grid>
    //         </Grid>
    //     </Grid>

    // );


    // src={imageFunction(day.Day.IconPhrase)}
    // weatherImage(day.Day.IconPhrase)

    const dayImg = () => {
        console.log(day);
    }

    function weatherImage(text) {
        // 4 ifs
        console.log(text);
        if (text == 'Sunny' || 'Mostly sunny' || 'Partly sunny' || 'Hazy sunshine' || 'Partly Sunny w/ Flurries' || 'Clear' || 'Mostly Clear') { //sunny
            return sunny;
            // return text;
        } if (text == 'Intermittent clouds' || 'Mostly cloudy' || 'Cloudy' || 'Dreary (Overcast)' || 'Flurries' || 'Mostly Cloudy w/ Flurries' || 'Snow' || 'Freezing rain') {     //cloudy
            return cloudy;
            // return text;
        } if (text == 'Fog' || 'Mostly Cloudy w/ Snow' || 'Partly cloudy' || 'Intermittent clouds') {  //partly cloudy
            return mostlyCloudy;
        } if (text == 'Showers' || 'Mostly Cloudy w/ Showers' || 'Partly Sunny w/ Showers' || 'T-storms' || 'Mostly cloudy w/ T-Storms' || 'Partly sunny w/ t-storms' || 'Rain' || 'Ice' || 'Sleet' || 'Rain and Snow' ||
            'Partly Cloudy w/ Showers' || 'Mostly Cloudy w/ Showers' || 'Partly Cloudy w/ T-Storms' || 'Mostly Cloudy w/ T-Storms' || 'Mostly Cloudy w/ Flurries' || 'Mostly Cloudy w/ Snow') { //rainy
            return tstorms;
        } else return '../../weatherTextImages/rain-snow.png';



    }

    return (
        <>
        <Grid item xs={6} lg={2.4} sx={{ textAlign: 'center' }} onClick={dayImg}>
            <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }}>
                <Typography>{daysOfWeek[theFormattedDate]} <br />Hi {day.Temperature.Maximum.Value} <br /> <img width="100px" src={weatherImage(day.Day.IconPhrase)} /> <br /> Lo {day.Temperature.Minimum.Value}</Typography>
            </Paper>
        </Grid>
        </>
    );


}




export default FiveDayForecast;
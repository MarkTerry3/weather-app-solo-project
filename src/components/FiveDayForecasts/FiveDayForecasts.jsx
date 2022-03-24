import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import snowImage from '../../weatherTextImages/rain-snow.png'
import { useSelector } from 'react-redux';
import '../../weatherTextImages/sunny.png';
import '../../weatherTextImages/cloudy.png';
import '../../weatherTextImages/mostly-cloudy.png';
import '../../weatherTextImages/tstorms.png';




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

    function weatherImage(text) {
        // 4 ifs
        if (text === 'Sunny' || 'Mostly Sunny' || 'Partly Sunny' || 'Hazy Sunshine' || 'Partly Sunny w/ Flurries' || 'Clear' || 'Mostly Clear') { //sunny
            text = '../../weatherTextImages/sunny.png';
            return text;
        } if (text === 'Intermittent Clouds' || 'Mostly Cloudy' || 'Cloudy' || 'Dreary (Overcast)' || 'Flurries' || 'Mostly Cloudy w/ Flurries' || 'Snow' || 'Freezing Rain') {     //cloudy
            text = '../../weatherTextImages/cloudy.png';
            return text;
        } if (text === 'Fog' || 'Mostly Cloudy w/ Snow' || 'Partly Cloudy' || 'Intermittent Clouds') {  //partly cloudy
            text = '../../weatherTextImages/mostly-cloudy.png';
            return text;
        } if (text === 'Showers' || 'Mostly Cloudy w/ Showers' || 'Partly Sunny w/ Showers' || 'T-Storms' || 'Mostly Cloudy w/ T-Storms' || 'Partly Sunny w/ T-Storms' || 'Rain' || 'Ice' || 'Sleet' || 'Rain and Snow' ||
            'Partly Cloudy w/ Showers' || 'Mostly Cloudy w/ Showers' || 'Partly Cloudy w/ T-Storms' || 'Mostly Cloudy w/ T-Storms' || 'Mostly Cloudy w/ Flurries' || 'Mostly Cloudy w/ Snow') { //rainy
            text = '../../weatherTextImages/tstorms.png';
            return text;
        } else return '../../weatherTextImages/rain-snow.png';



    }

    return (

        <Grid item xs={6} lg={2.4} sx={{ textAlign: 'center' }}>
            <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }}>
                <Typography>{daysOfWeek[theFormattedDate]} <br />Hi {day.Temperature.Maximum.Value} <br /> <img width="100px" src={weatherImage(day.Day.IconPhrase)} /> <br /> Lo {day.Temperature.Minimum.Value}</Typography>
            </Paper>
        </Grid>

    );


}




export default FiveDayForecast;
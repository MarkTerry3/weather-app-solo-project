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


    //                             {day.Date.substring(0, 10)}
    //                             Hi: {day.Temperature.Maximum.Value}
    //                             Lo: {day.Temperature.Minimum.Value}

    function imageTest(params) {
        for (let i = 0; i < 5; i++) {
            if (i === 1) {
                return sunny;
            } if (i === 2) {
                return cloudy;
            } if (i === 3) {
                return mostlyCloudy;
            } if (i === 4) {
                return tstorms;
            } else return sunny
        } // end for loop
    } // end imageTest

    // src={imageFunction(day.Day.IconPhrase)}
    // weatherImage(day.Day.IconPhrase)

    const dayImg = () => {
        console.log(day);
    }

    function weatherImage(text) {
        // 4 ifs
        console.log(day);
        console.log(text);
        if (text == 'Sunny' || 'Mostly sunny' || 'Partly sunny' || 'Hazy sunshine' || 'Partly sunny w/ Flurries' || 'Clear' || 'Mostly clear') { //sunny
            return sunny;
        } if (text == 'Intermittent clouds' || 'Mostly cloudy' || 'Cloudy' || 'Dreary (Overcast)' || 'Flurries' || 'Mostly Cloudy w/ Flurries' || 'Snow' || 'Freezing rain') {     //cloudy
            return cloudy;
        } if (text == 'Fog' || 'Mostly Cloudy w/ Snow' || 'Partly cloudy' || 'Intermittent clouds') {  //partly cloudy
            return mostlyCloudy;
        } if (text == 'Showers' || 'Mostly Cloudy w/ Showers' || 'Partly Sunny w/ Showers' || 'T-storms' || 'Mostly cloudy w/ T-Storms' || 'Partly sunny w/ t-storms' || 'Rain' || 'Ice' || 'Sleet' || 'Rain and snow' ||
            'Partly Cloudy w/ Showers' || 'Mostly Cloudy w/ Showers' || 'Partly Cloudy w/ T-Storms' || 'Mostly Cloudy w/ T-Storms' || 'Mostly Cloudy w/ Flurries' || 'Mostly Cloudy w/ Snow') { //rainy
            return tstorms;
        } else return;



    }


    // weatherImage(day.Day.IconPhrase)
function checkText(params) {
    switch (params) {
        case sunny: 'Mostly sunny'
            //Statements executed when the
            //result of expression matches value1
            break;
        case cloudy: 'Cloudy'
            //Statements executed when the
            //result of expression matches value2
            break;
        case mostlyCloudy: 'Partly sunny'
            //Statements executed when the
            //result of expression matches valueN
            break;
        case tstorms: 'Rain and snow', 'Showers'
            //Statements executed when the
            //result of expression matches valueN
            break;
        default:
            //Statements executed when none of
            //the values match the value of the expression
            break;
    }
}





    return (
        <>
            <Grid item xs={6} lg={2.4} sx={{ textAlign: 'center' }} onClick={dayImg}>
                <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }}>
                    <Typography>{daysOfWeek[theFormattedDate]} <br />Hi {day.Temperature.Maximum.Value} <br /> <img width="100px" src={imageTest(day.Day.IconPhrase)} /> <br /> Lo {day.Temperature.Minimum.Value}</Typography>
                </Paper>
            </Grid>
        </>
    );


}




export default FiveDayForecast;
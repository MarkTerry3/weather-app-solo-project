import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import tstorms from '../../weatherTextImages/tstorms.png';
import { useHistory } from 'react-router-dom';


function HourlyForecasts() {


    const history = useHistory();

    const hourly = useSelector(store => store.currentConditions.hourlyReducer)

    const goBack = () => {
        history.push('/home');
    }

    const hourlyText = () => {
        console.log(hourly);
    }


    // convert epoch time to human readable
    function convertMilitaryTime(time) {
        // var time = "16:30:00"; // your input

        time = time.split(':'); // convert to array

        // fetch
        var hours = Number(time[0]);
        var minutes = Number(time[1]);
        // var seconds = Number(time[2]);

        // calculate
        var timeValue;

        if (hours > 0 && hours <= 12) {
            timeValue = "" + hours;
        } else if (hours > 12) {
            timeValue = "" + (hours - 12);
        } else if (hours == 0) {
            timeValue = "12";
        }

        timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        // timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
        timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

        // show
        // alert(timeValue);
        // console.log(timeValue);
        return timeValue;
    }

    // epoch time conversion
    function getTime(t) {
        const dt = new Date(t);
        const hr = dt.getUTCHours();
        const m = "0" + dt.getUTCMinutes();
       return convertMilitaryTime(hr + ':' + m.substr(-2));
        // return hr + ':' + m.substr(-2)
    }


    return (
        <>
            <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={goBack}>Go Back</Button>
            <Grid container spacing={1} sx={{ width: '70%', height: '350px', margin: 'auto' }} >
                {hourly.map((hour, i) => (
                    <Grid item xs={6} lg={2} sx={{ width: '20%', height: '350px', margin: 'auto', textAlign: 'center' }}>
                        <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }} onClick={hourlyText}>
                            <Typography> {getTime(hour.DateTime)} <br /> {hour.Temperature.Value} <br />  {hour.IconPhrase} <br /><img width="100px" src={tstorms} /></Typography>
                        </Paper>
                    </Grid>
                )
                )}
            </Grid>

        </>
    )
}


export default HourlyForecasts;
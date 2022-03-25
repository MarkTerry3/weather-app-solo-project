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


    return (
        <>
            <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={goBack}>Go Back</Button>
            <Grid container spacing={1} sx={{ width: '70%', height: '350px', margin: 'auto' }} >
            {hourly.map((hour, i) => (
            <Grid item xs={6} lg={2} sx={{ width: '20%', height: '350px', margin: 'auto', textAlign: 'center' }}>
                <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }} onClick={hourlyText}>
                    <Typography> {hour.DateTime} <br /> {hour.Temperature.Value} <br />  {hour.IconPhrase} <br /><img width="100px" src={tstorms} /></Typography>
                </Paper>
            </Grid>  
            )
        )}
        </Grid>

        </>
    )
}


export default HourlyForecasts;
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
            <Grid item xs={6} lg={2.4} sx={{ textAlign: 'center' }}>
                <Paper sx={{ py: 3, color: 'white', backgroundColor: '#37485c' }} onClick={hourlyText}>
                    <Typography> Date <br /> Temperature <br />  Weather Text <br /><img width="100px" src={tstorms} /></Typography>
                </Paper>
            </Grid>
        </>
    )
}


export default HourlyForecasts;
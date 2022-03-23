import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import snowImage from '../../weatherTextImages/rain-snow.png'






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

 


    return (

                <Grid item xs={6} lg={2.4} sx={{textAlign: 'center'}}>
                    <Paper sx={{py: 3, color: 'white', backgroundColor: '#37485c'}}>
                    <Typography>{daysOfWeek[theFormattedDate]} <br/>Hi {day.Temperature.Maximum.Value} <br/> <img width="100px" src={snowImage}/> <br/> Lo {day.Temperature.Minimum.Value}</Typography>
                    </Paper>
                </Grid>

    );


}




export default FiveDayForecast;
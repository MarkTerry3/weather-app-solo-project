import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

function FiveDayForecast({ day }) {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };


    const jsx = `
<Grid container spacing={${spacing}}>
`;


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

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
    //                                     // (theme) =>
    //                                     //     theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
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
<>
</>
    );
}




export default FiveDayForecast;
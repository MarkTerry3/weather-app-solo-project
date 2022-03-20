import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

function FiveDayForecast({ fiveDayForecast }) {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            {/* {fiveDayForecast.map((day, i) => {
                                return ( */}
                                    <Paper
                                        // key={i}
                                        sx={{
                                            height: 140,
                                            width: 100,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                        }}
                                    >
                                        {/* {fiveDayForecast.Date} */}
                                        

                                    </Paper>
                                  {/* )
                            })}  */}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}




export default FiveDayForecast;
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';







function RadarView () {

    const history = useHistory();

    const goBack = () => {
        history.push('/home');
    }



    return(
        <>
        <button onClick={goBack}>Go back</button>
        <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
            
        </Grid>
        </>
    )
}



export default RadarView;
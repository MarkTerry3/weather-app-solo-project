import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';







function RadarView () {

    const history = useHistory();

    const goBack = () => {
        history.push('/home');
    }

// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

    // return(
    //     <>
    //     <button onClick={goBack}>Go back</button>
    //     <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
            
    //     </Grid>
    //     </>
    // )


    render(
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )
}



export default RadarView;
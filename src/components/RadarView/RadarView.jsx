import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';






function RadarView () {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

// import { MapContainer, TileLayer, Marker } from 'react-leaflet';

    const position = [44.9537, -93.0900]


    return(
        <div className="mapContainer">
        <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
        <button onClick={goBack}>Go back</button>
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
        </Grid>
        </div>
      )
}



export default RadarView;
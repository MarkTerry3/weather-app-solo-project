import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {useState} from 'react';
import './RadarView.css';
import Button from '@mui/material/Button';
// import {Helmet} from "react-helmet";



function RadarView() {

    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }



//     return position === null ? null : (
//         <Marker position={position}>
//             <Popup>You are here</Popup>
//         </Marker>
//     )
// }

 const position = [44.9537, -93.0900]

// const myMap = L.map('mapid', {
//     center: [44.9537, -93.0900],
//     zoom: 13
// })

// function LocationMarker() {
//     const [position, setPosition] = useState(null)
//     const map = useMapEvents({
//         click() {
//             map.locate()
//         },
//         locationfound(e) {
//             setPosition(e.latlng)
//             map.flyTo(e.latlng, map.getZoom())
//         },
//     })

    // return (
    //     <div id="mapid">
    //         <Grid container spacing={2} sx={{ width: '70%', height: '350px', margin: 'auto' }}>
    //             <button onClick={goBack}>Go back</button>
    //             <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    //                 <TileLayer
    //                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                 />
    //                 <Marker position={position}>
    //                     <Popup>
    //                         A pretty CSS3 popup. <br /> Easily customizable.
    //                     </Popup>
    //                 </Marker>
    //             </MapContainer>
    //         </Grid>
    //     </div>
    // )


    // const myMap = L.map('mapid', {
    //     center: [44.9537, -93.0900],
    //      zoom: 13
    //    })


    const options = {
        // Required: API key
        key: 'PsLAtXpsPTZexBwUkO7Mx5I', // REPLACE WITH YOUR KEY !!!
    
        // Put additional console output
        verbose: true,
    
        // Optional: Initial state of the map
        lat: 44.9537,
        lon: 93.0900,
        zoom: 13,
    };
    
    // Initialize Windy API
    windyInit(options, windyAPI => {
        // windyAPI is ready, and contain 'map', 'store',
        // 'picker' and other usefull stuff
    
        const { map } = windyAPI;
        // .map is instance of Leaflet map
    
        L.popup()
            .setLatLng([44.9537, 14.3])
            .setContent('Hello World')
            .openOn(map);
    });
       

    return(
        <div id="windy">
        <MapContainer className="leaflet-container" center={[44.9537, -93.0900]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[44.9537, -93.0900]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Button className="button" style={{ backgroundColor: "teal" }} variant="contained" onClick={goBack}>Go Back</Button>
      </div>
    )


}



export default RadarView;
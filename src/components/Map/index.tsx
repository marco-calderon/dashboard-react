import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './style.scss';

const position: LatLngExpression = [51.505, -0.09];
const token = 'pk.eyJ1IjoiZmxleG9jYXJwaXVzIiwiYSI6ImNrMmUyZ2F2ZDA1MmMzY2w2bHhqZndjamgifQ.SNrzhibLWQ_M7mID7En07w';
const attribution = '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const Map = () => {
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution={attribution}
        url={"https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + token}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;

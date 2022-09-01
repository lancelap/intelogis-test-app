import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './style.css';

const CENTER_MOSCOW = [55.755116, 37.620958];

export default function Map() {
    return (
        <div className="map-container">
            <MapContainer center={CENTER_MOSCOW} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    );
}

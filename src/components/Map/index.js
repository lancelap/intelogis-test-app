import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import RoutingMachine from './RoutingMachine';
import './style.css';

const CENTER_MOSCOW = [55.755116, 37.620958];
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

export default function Map() {
    const requests = useSelector((state) => state.requests.data);
    const addresses = useSelector((state) => state.addresses);
    const selected = useSelector((state) => state.requests.selected);
    let startMarker;
    let endMarker;
    if (selected) {
        startMarker = addresses[requests[selected].start].latLng;
        endMarker = addresses[requests[selected].end].latLng;
    }

    return (
        <div className="map-container">
            <MapContainer center={CENTER_MOSCOW} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {selected && (
                    <>
                        <Marker position={startMarker}>
                            <Popup>{'Адрес зоны погрузки'}</Popup>
                        </Marker>
                        <RoutingMachine start={startMarker} end={endMarker} color={'red'} />
                        <Marker position={endMarker}>
                            <Popup>{'Адрес зоны разгрузки'}</Popup>
                        </Marker>
                    </>
                )}
            </MapContainer>
        </div>
    );
}

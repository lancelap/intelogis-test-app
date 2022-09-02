import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

export const RoutingMachine = ({ start, end, color }) => {
    const map = useMap();

    useEffect(() => {
        if (!map) return;

        const routingControl = L.Routing.control({
            waypoints: [start, end],
            lineOptions: {
                styles: [
                    {
                        color,
                    },
                ],
            },
            routeWhileDragging: false,
            useZoomParameter: true,
            pointMarkerStyle: { display: 'none' },
        }).addTo(map);

        return () => map.removeControl(routingControl);
    }, [map, start, color, end]);

    return null;
};

export default RoutingMachine;

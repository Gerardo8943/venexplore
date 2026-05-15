"use client";

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { stateCoordinates } from '@/lib/data';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const STATE_COLORS: Record<string, string> = {
  falcon: "#FFD100",
  merida: "#E63946",
  miranda: "#2A9D8F",
  "nueva-esparta": "#0077B6",
};

const STATE_LABELS: Record<string, { name: string; description: string }> = {
  falcon: { name: "Falcón", description: "Médanos dorados y playas del Caribe" },
  merida: { name: "Mérida", description: "Cumbres nevadas y páramos andinos" },
  miranda: { name: "Miranda", description: "Selva nublada y cultura afrodescendiente" },
  "nueva-esparta": { name: "Nueva Esparta", description: "La perla del Caribe venezolano" },
};

const mapDestinations = [
  {
    id: 'roques',
    name: 'Los Roques',
    lat: 11.8540,
    lng: -66.7551,
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300&h=200',
    description: 'Archipiélago de aguas cristalinas.'
  },
  {
    id: 'saltoangel',
    name: 'Salto Ángel',
    lat: 5.9688,
    lng: -62.5373,
    image: '/img/resume/salto_angel.png',
    description: 'La caída de agua más alta del mundo.'
  },
  {
    id: 'laguaira',
    name: 'La Guaira',
    lat: 10.6000,
    lng: -66.9333,
    image: '/img/estados/vargas/playa-vargas.jpg',
    description: 'Vibrante litoral y cultura afrocaribeña.'
  }
];

export default function LeafletMap() {
  return (
    <MapContainer
      center={[8.5, -67.0]}
      zoom={6}
      minZoom={5}
      maxZoom={9}
      maxBounds={[[0.5, -74.0], [12.5, -59.0]]}
      maxBoundsViscosity={1.0}
      style={{ height: "100%", width: "100%", borderRadius: "24px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* State highlight circles */}
      {Object.entries(stateCoordinates).map(([id, coords]) => {
        const color = STATE_COLORS[id] || "#0077B6";
        const label = STATE_LABELS[id];
        if (!label || !["falcon", "merida", "miranda", "nueva-esparta"].includes(id)) return null;

        return (
          <React.Fragment key={id}>
            <CircleMarker
              center={[coords.lat, coords.lng]}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.2,
                weight: 3,
              }}
              radius={30}
            />
            <CircleMarker
              center={[coords.lat, coords.lng]}
              pathOptions={{
                color: color,
                fillColor: color,
                fillOpacity: 0.6,
                weight: 2,
              }}
              radius={12}
            >
              <Popup>
                <div style={{ textAlign: 'center', minWidth: '120px' }}>
                  <h4 style={{
                    margin: '0 0 4px',
                    color: color,
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '1.1rem'
                  }}>
                    {label.name}
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>
                    {label.description}
                  </p>
                </div>
              </Popup>
            </CircleMarker>
          </React.Fragment>
        );
      })}

      {/* Destination markers */}
      {mapDestinations.map(dest => (
        <Marker key={dest.id} position={[dest.lat, dest.lng]}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '100%', height: '80px', marginBottom: '8px',
                borderRadius: '8px', overflow: 'hidden'
              }}>
                <img
                  src={dest.image}
                  alt={dest.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h4 style={{ margin: '0 0 4px', color: '#0077B6', fontSize: '0.95rem' }}>
                {dest.name}
              </h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#666' }}>
                {dest.description}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
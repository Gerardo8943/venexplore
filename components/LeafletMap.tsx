"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';

// Fix leaflet icon issue in Next.js/Webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Destination Data for Map exactly with coordinates specific to Venezuela
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
    id: 'coro',
    name: 'Médanos de Coro',
    lat: 11.4116, 
    lng: -69.6702,
    image: '/img/estados/falcon/Medanos-de-Coro1.jpg',
    description: 'Impresionante desierto junto al mar.'
  },
  {
    id: 'merida',
    name: 'Mérida',
    lat: 8.5952, 
    lng: -71.1441,
    image: '/img/estados/merida/sierra-nevada.jpg',
    description: 'Tierra de nieves eternas y picos majestuosos.'
  },
  {
    id: 'saltoangel',
    name: 'Salto Ángel',
    lat: 5.9688, 
    lng: -62.5373,
    image: '/img/section-resume/salto_angel.png',
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
      center={[7.5, -66.0]} 
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
      
      {mapDestinations.map(dest => (
        <Marker key={dest.id} position={[dest.lat, dest.lng]}>
          <Popup>
            <div style={{ textAlign: 'center' }}>
              <div style={{ position: 'relative', width: '100%', height: '100px', marginBottom: '8px', borderRadius: '8px', overflow: 'hidden' }}>
                 <img src={dest.image} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h4 style={{ margin: '0 0 4px', color: 'var(--color-primary)' }}>{dest.name}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem' }}>{dest.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

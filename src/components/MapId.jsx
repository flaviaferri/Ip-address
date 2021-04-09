import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Map = styled(MapContainer)(
  () => css`
    height: 41rem;
    width: 100%;
    z-index: 0;
    margin-top: -6rem;
  `
);

export default function MapIp({ location }) {
  return (
    <>
      <Map
        center={[location?.lat || 51.505, location?.lng || -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[location?.lat || 51.505, location?.lng || -0.09]}
        ></Marker>
      </Map>
    </>
  );
}

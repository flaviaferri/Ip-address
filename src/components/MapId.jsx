import React, { memo } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Map = styled(MapContainer)(
  () => css`
    height: 41rem;
    width: 100%;
    z-index: 0;
  `
);

const MapIp = ({ lat, lng }) => {
  return (
    <>
      <Map
        center={[lat || 51.505, lng || -0.09]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat || 51.505, lng || -0.09]}></Marker>
      </Map>
    </>
  );
};

export default memo(MapIp);

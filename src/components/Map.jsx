import React from "react";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const MapContainerStyled = styled(MapContainer)(
  ({ theme }) => css`
    height: 80vh;
    width: 100%;
    z-index: 0;
    position: absolute;
    bottom: 0;
    z-index: -1;

    ${theme.breakpoints[0]} {
      height: 60vh;
    }
  `
);

const Map = ({ lat, lng }) => {
  return (
    <>
      <MapContainerStyled
        center={[lat || 51.505, lng || -0.09]}
        zoom={16}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat || 51.505, lng || -0.09]}></Marker>
        <ZoomControl position="bottomleft"></ZoomControl>
      </MapContainerStyled>
    </>
  );
};

export default Map;

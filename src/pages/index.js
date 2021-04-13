import React, { useState, useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Head from "../components/Head";
import IpInput from "../components/IpInput";
import ipApi from "../pages/api/ipApi";
import InfoSearched from "../components/InfoSearched";

const Wrapper = styled.div(
  () => css`
    position: relative;
  `
);

export default function Home() {
  const [resultIp, setResultIp] = useState("");

  const [infoIpSearched, setInfoIpSearched] = useState("");

  useEffect(async () => {
    const data = await ipApi.getIp(infoIpSearched);
    setResultIp(data);
  }, [infoIpSearched]);

  const MapId = dynamic(
    () => import("../components/MapId"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );

  return (
    <>
      <Head />
      <Wrapper>
        <IpInput handleClick={setInfoIpSearched} />
        <InfoSearched resultIp={resultIp} />
      </Wrapper>

      <MapId location={resultIp.location} />
    </>
  );
}

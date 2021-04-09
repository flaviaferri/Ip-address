import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Head from "../components/Head";
import IpInput from "../components/IpInput";
import ipApi from "../pages/api/ipApi";
import InfoSearched from "../components/InfoSearched";

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
      <IpInput handleClick={setInfoIpSearched} />
      <InfoSearched resultIp={resultIp} />
      <MapId location={resultIp.location} />
    </>
  );
}

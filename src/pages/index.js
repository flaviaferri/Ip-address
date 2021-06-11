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

const MessageError = styled.div(
  () => css`
    display: flex;
    z-index: 1;
    position: absolute;
    min-height: 5.5rem;
    display: flex;
    width: 35rem;
    font-size: 1.4rem;
    color: white;
    background-color: #ff0000d4;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    bottom: -60%;
    left: 0;
    right: 0;
  `
);

const MsgError = styled.p(
  () => css`
    margin: auto;
  `
);

export default function Home() {
  const MapId = dynamic(() => import("../components/MapId"), { ssr: false });

  const [resultIp, setResultIp] = useState("");
  const [infoIpSearched, setInfoIpSearched] = useState("");
  const [isError, setIsError] = useState(false);

  const { location } = resultIp;

  useEffect(async () => {
    try {
      const data = await ipApi.getIp(infoIpSearched);
      setResultIp(data);
    } catch (error) {
      console.log(isError);
      setIsError(true);
    }
  }, [infoIpSearched]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isError) {
        setIsError(false);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isError]);

  return (
    <>
      <Head />
      <Wrapper>
        <IpInput handleClick={setInfoIpSearched} />
        <InfoSearched resultIp={resultIp} />

        {isError && (
          <MessageError>
            <MsgError>Write a valid IP!</MsgError>
          </MessageError>
        )}
      </Wrapper>

      <MapId lat={location?.lat} lng={location?.lng} />

      {console.log(location)}
    </>
  );
}

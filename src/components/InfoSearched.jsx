import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrapper = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.white};
    height: 12rem;
    width: 95rem;
    border-radius: 1.5rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
    box-shadow: -1px 6px 15px 0px rgba(0, 0, 0, 0.46);
    padding: 1rem;
    z-index: 1;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    bottom: -25%;

    ${theme.breakpoints[2]} {
      flex-direction: column;
      width: 40rem;
      height: auto;
      bottom: -52%;
    }

    ${theme.breakpoints[0]} {
      bottom: -60%;
    }

    ${theme.breakpoints[0]} {
      width: 80%;
    }
  `
);

const WrapperiInfo = styled.div(
  ({ theme }) => css`
    flex: 1 1 auto;
    margin: 2rem 1.5rem;
    border-right: 0.1rem solid ${theme.colors.darkGray};
    :last-of-type {
      border: 0;
    }

    ${theme.breakpoints[2]} {
      text-align: center;
      border-right: none;
    }
  `
);

const IpInfo = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.darkGray};
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
  `
);

const InfoResult = styled.p(
  ({ theme }) => css`
    color: ${theme.colors.veryDarkGray};
    font-size: 2.2rem;
    font-weight: 500;
    margin-top: 1.2rem;
  `
);

export default function Info({ resultIp }) {
  console.log(resultIp);

  return (
    <Wrapper>
      <WrapperiInfo>
        <IpInfo>Ip Address</IpInfo>
        <InfoResult>{resultIp?.ip}</InfoResult>
      </WrapperiInfo>
      <WrapperiInfo>
        <IpInfo>Location</IpInfo>
        <InfoResult>
          {`${resultIp?.location?.city}, ${resultIp?.location?.country} 
          ${resultIp?.location?.postalCode}`}
        </InfoResult>
      </WrapperiInfo>
      <WrapperiInfo>
        <IpInfo>Timezone</IpInfo>
        <InfoResult>{resultIp?.location?.timezone}</InfoResult>
      </WrapperiInfo>
      <WrapperiInfo>
        <IpInfo>Isp</IpInfo>
        <InfoResult>{resultIp?.isp}</InfoResult>
      </WrapperiInfo>
    </Wrapper>
  );
}

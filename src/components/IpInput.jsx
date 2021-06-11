import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import background from "../images/pattern-bg.png";
import { FaChevronRight } from "react-icons/fa";

const BackgroundHeader = styled.section(
  () => css`
    background-image: url(${background});
    background-size: cover;
    min-height: 23rem;
    display: flex;
    padding-top: 5rem;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.white};

     ${theme.breakpoints[2]} {
      min-height: 35rem;
  `
);

const WrapperTitle = styled.div(
  () => css`
    display: flex;
  `
);

const Title = styled.h1(
  () => css`
    font-size: 2.5rem;
    font-weight: 500;
  `
);
const WrapperSearch = styled.div(
  () => css`
    align-items: center;
    display: flex;
    margin: 2rem 0;
    width: 40rem;

    ${theme.breakpoints[0]} {
      width: 80%;
    }
  `
);

const InputSearchIp = styled.input(
  ({ theme }) => css`
    padding: 1.2rem 2rem;
    height: 5rem;
    width: 90%;
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-size: 1.8rem;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
    outline-color: ${theme.colors.darkGray};
  `
);

const ButtonSearchIp = styled.button(
  ({ theme }) => css`
    display: inline-flex;
    align-items: center;
    height: 5rem;
    width: 10%;
    background-color: ${theme.colors.veryDarkGray};
    color: ${theme.colors.white};
    padding: 0 1.6rem;
    border: none;
    border-bottom-right-radius: 1rem;
    border-top-right-radius: 1rem;
    font-size: 1.8rem;
    outline: none;
    cursor: pointer;

    :hover {
      background-color: #2b2b2be6;
    }

    ${theme.breakpoints[0]} {
      padding: 0.5rem;
    }
  `
);

export default function Header({ handleClick }) {
  const [ipSearched, setIpSearched] = useState("");

  return (
    <BackgroundHeader>
      <WrapperTitle>
        <Title>IP Address Tracker</Title>
      </WrapperTitle>
      <WrapperSearch>
        <InputSearchIp
          type="text"
          placeholder="Search any IP address. Ex 127.0.0.0"
          value={ipSearched}
          onChange={(e) => setIpSearched(e.target.value)}
        />
        <ButtonSearchIp onClick={() => handleClick(ipSearched)}>
          <FaChevronRight />
        </ButtonSearchIp>
      </WrapperSearch>
    </BackgroundHeader>
  );
}

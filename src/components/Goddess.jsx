import React from "react";
import styled from "styled-components";

// Components

//Media
import sofia from "../images/goddess_tempel.png";
import clouds from "../images/clouds.gif";
import parchment from "../images/parchment.png";

export default function Goddess({ oracle }) {
    const Wrapper = styled.div`
        background: url(${clouds});
        background-repeat: no-repeat;
        background-size: cover;
        height: 85vh;
        display: grid;
        grid-template-columns: 0.8fr 1fr 1fr 1.1fr;
        grid-template-rows: repeat(4, auto);

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            height: 85vh;
            width: 100%;
        }
    `;

    const Sophia = styled.div`
        grid-row: 1 / span 4;
        grid-column: 1 / span 4;
        background: url(${sofia});
        background-repeat: no-repeat;
        height: 100%;
        background-size: cover;
        background-position: center top;

        @media (max-width: 768px) {
            grid-row: 7 / span 3;
            margin-top: 20px;
            -webkit-box-shadow: -1px -7px 30px -4px rgba(231, 166, 26, 0.59);
            -moz-box-shadow: -1px -7px 30px -4px rgba(231, 166, 26, 0.59);
            box-shadow: -1px -7px 30px -4px rgba(231, 166, 26, 0.59);
        }
    `;
    const Oracle = styled.div`
        background: url(${parchment});
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        width: 300px;
        grid-row: 2 / span 2;
        grid-column: 3 / span 1;
        background-position: center;
        justify-self: center;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 768px) {
            flex-direction: column;
            grid-column: 1 / span 3;
            grid-row: 3 / span 4;
            margin: 20px 0;
        }
    `;

    const OracleResult = styled.div`
        padding: 20px 50px;
        margin: auto 20px;
        display: flex;
        width: 70%;
        text-align: center;
        font-size: 1.5rem;

        @media (max-width: 768px) {
            width: 50%;
        }
    `;

    const Header = styled.p`
        display: none;

        @media (max-width: 768px) {
            grid-row: 1 / span 2;
            display: block;
            width: 100%;
            padding-top: 5px;
            padding-bottom: 5px;
            margin: 0px;
            text-align: center;
            font-size: 1.5rem;
            background: black;
            color: white;
            position: fixed;
            top: 0;
        }
    `;
    return (
        <Wrapper>
            <Header>
                {" "}
                Bist du bereit, Sophias Orakelspruch für dich zu empfangen?
            </Header>
            <Sophia></Sophia>
            <Oracle>
                <OracleResult>{oracle}</OracleResult>
            </Oracle>
        </Wrapper>
    );
}

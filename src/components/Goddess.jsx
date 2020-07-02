import React from "react";
import styled from "styled-components";

// Components

//Media
import sofia from "../images/goddess_tempel.png";
import clouds from "../images/clouds.gif";
import parchment from "../images/parchment.png";

export default function Goddess({ oracle, getOracle }) {
    const Wrapper = styled.div`
        background: url(${clouds});
        background-repeat: no-repeat;
        background-size: cover;
        height: 85vh;
        display: grid;
        grid-template-columns: 0.8fr 1fr 1fr 1.1fr;
        grid-template-rows: repeat(4, auto);

        @media (max-width: 768px) {
            grid-template-rows: auto;
            height: 90vh;
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
    const Button = styled.button`
        height: 100px;
        margin: 10px;
        padding: 5px;
        border-radius: 19px 19px 19px 19px;
        -moz-border-radius: 19px 19px 19px 19px;
        -webkit-border-radius: 19px 19px 19px 19px;
        color: black;
        border: 1px solid white;
        font-size: 2rem;
        width: 290px;
        grid-row: 4 / span 1;
        grid-column: 3 / span 1;
        justify-self: center;
        background: rgb(254, 252, 234); /* Old browsers */
        background: -moz-linear-gradient(
            top,
            rgb(254, 252, 234) 0%,
            rgb(241, 218, 54) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
            top,
            rgb(254, 252, 234) 0%,
            rgb(241, 218, 54) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
            to bottom,
            rgb(254, 252, 234) 0%,
            rgb(241, 218, 54) 100%
        );
        @media (max-width: 768px) {
            display: none;
        }
    `;
    const Button2 = styled.button`
        height: 100px;
        margin: 10px;
        padding: 5px;
        border-radius: 19px 19px 19px 19px;
        -moz-border-radius: 19px 19px 19px 19px;
        -webkit-border-radius: 19px 19px 19px 19px;
        color: black;
        border: 1px solid white;
        font-size: 2rem;
        width: 290px;
        grid-row: 4 / span 1;
        grid-column: 3 / span 1;
        justify-self: center;

        background: rgb(254, 252, 234); /* Old browsers */
        background: -moz-linear-gradient(
            top,
            rgb(254, 252, 234) 0%,
            rgb(241, 218, 54) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
            top,
            rgb(254, 252, 234) 0%,
            rgb(241, 218, 54) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
            to bottom,
            rgb(254, 252, 234) 0%,
            rgb(241, 218, 54) 100%
        );
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
                <Button2 onClick={getOracle}>Frage die Göttin</Button2>
            </Header>
            <Sophia></Sophia>
            <Oracle>
                <OracleResult>{oracle}</OracleResult>
            </Oracle>
            <Button onClick={getOracle}>Frage die Göttin</Button>
        </Wrapper>
    );
}

import React from "react";
import styled from "styled-components";

// Media

export default function Footer({ getOracle }) {
    const Wrapper = styled.div`
        height: 15vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgba(10, 10, 10);
        position: fixed;
        bottom: 0;
        width: 100%;

        @media (max-width: 768px) {
            height: 15vh;
        }
    `;

    const Button = styled.button`
        height: 100px;
        margin: 10px;
        padding: 5px;
        border-radius: 19px 19px 19px 19px;
        -moz-border-radius: 19px 19px 19px 19px;
        -webkit-border-radius: 19px 19px 19px 19px;
        background-color: black;
        color: white;
        border: 1px solid white;
        font-size: 2rem;
        width: 290px;
    `;

    const Question = styled.p`
        margin: 0px;
        padding: 5px;
        color: white;
        font-size: 1rem;

        @media (max-width: 768px) {
            display: none;
        }
    `;

    return (
        <Wrapper>
            <Question>
                Bist du bereit , Sophias Orakelspruch für dich zu empfangen?
            </Question>
            <Button onClick={getOracle}>Frage die Göttin</Button>
        </Wrapper>
    );
}

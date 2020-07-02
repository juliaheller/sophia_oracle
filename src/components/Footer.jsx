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
            height: 10vh;
        }
    `;

    return (
        <Wrapper>
            <br />
            <a href="http://helle-koepfe.com/">Portfolio</a>
            <a href="http://helle-koepfe.com/impressum.html">Impressum</a>
            <a href="http://helle-koepfe.com/datenschutzerklaerung.html">DSE</a>
        </Wrapper>
    );
}

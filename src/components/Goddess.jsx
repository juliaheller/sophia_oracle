import React from "react";
import styled from "styled-components";

//Media
import sofia from "../images/goddess_tempel.png";
import clouds from "../images/clouds.gif";

export default function Goddess() {
    const Wrapper = styled.div`
        background: url(${clouds});
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
    `;

    const Sophia = styled.div`
        background: url(${sofia});
        background-repeat: no-repeat;
        height: 100%;
        background-size: cover;
        background-position: center top;
    `;

    return (
        <Wrapper>
            <Sophia />
        </Wrapper>
    );
}

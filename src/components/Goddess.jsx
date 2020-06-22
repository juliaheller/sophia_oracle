import React from "react";
import styled from "styled-components";

//Media
import sofia from "../images/Sofia_cut.png";
import clouds from "../images/clouds.gif";

export default function Goddess() {
    const Wrapper = styled.div`
        background: url(${clouds});
        background-repeat: no-repeat;
        background-size: cover;
        height: 90vh;
    `;

    const Sophia = styled.div`
        background: url(${sofia});
        background-repeat: no-repeat;
        height: 100%;
        background-size: contain;
        background-position: center bottom;
    `;
    return (
        <Wrapper>
            <Sophia />
        </Wrapper>
    );
}

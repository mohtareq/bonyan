import styled from "styled-components";

export const All = styled.div`
    width: 100%;
    padding: 100px 20px;
    display: flex;
    justify-content: center;
    background: #bcbfc22a;
    @media (max-width: 900px) {
        padding: 20px 20px;
        display: grid;
    }
`;

export const Intro = styled.div`
    justify-content: center;
    align-items: center;
    text-align: center;
    display: grid;
    padding: 80px 0;
    @media (max-width: 600px) {
        height: auto;
        padding: 30px 0;
    }
`;
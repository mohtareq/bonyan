import styled from "styled-components";

export const LogoContainer = styled.svg`
    float: right;
    width: 130px;
    cursor: pointer;
    padding-top: 10px;
    @media (min-width: 2000px) {
        margin-right: 100px;
        width: 246.93px;
    }
    @media (max-width: 1024px) {
        width: 115.32px;
    }
    @media (max-width: 900px) {
        width: 115.32px;
        margin: 5px 20px;    
    }
`;
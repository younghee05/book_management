import { css } from "@emotion/react";

export const layout = css`

    display: flex;
    justify-content: center;
    margin-top: 40px;
    width: 100%;

`;

export const uiLayout = css`

    display: flex;
    flex-wrap: wrap;
    width: 1200px;

`;

export const liLayout = css`

    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 220px;

    & li {
        &:nth-of-type(5n) {
            margin: 0px;
        }
    }

`;

export const checkImgLayout = css`

    width: 220px;
    height: auto;

`;

export const inputLayout = css`
    
    position: absolute;
    z-index: 1;

`;

export const imgLayout = css`

    position: relative;
    width: 220px;
    height: 240px;
    
    & img {
        
        width: 100%;
        height: 100%;
        background-color: gray;

    }

`;  

export const titleLayout = css`

    width: 220px;

    & p {

        width: 100%;
        margin: 10px 0px;

    }

`;
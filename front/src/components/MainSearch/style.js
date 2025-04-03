import { css } from "@emotion/react";

export const searchLayout = css`

    display: flex;
    align-items: center;
    height: 40px;
    border: 2px solid #7bcaff;

`;

export const inputLayout = css`

    padding: 0px;

    & input {

        width: 460px;
        height: 40px;
        padding: 0px;
        padding-left: 10px;
        font-size: 16px;
        outline: none;
        border: none;

    }

`;

export const buttonLayout = css`

    display: flex;
    align-items: center;
    height: 40px;

    & button {  
        
        width: 40px;
        padding: 0px;
        background: transparent;
        outline: none;
        border: none;

        & svg {

            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 25px;

        }

    }

`;
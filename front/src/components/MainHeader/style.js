import { css } from "@emotion/react";

export const headerLayout = css`

    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
    border-bottom: 2px solid #D1F6FF;

`;

export const box = css`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1200px;
    height: 100%;

`;

export const buttonLayout = css`

    & button {

        margin-right: 20px;
        width: 60px;
        height: 30px;
        background-color: white;
        border: 2px solid #7bcaff;

        &:hover {
            background-color: #e4f4ff;
        }

        &:active {
            background-color: #c9e3f4;
        }

        &:nth-of-type(3) {
            margin: 0px;
        }
    }

`;
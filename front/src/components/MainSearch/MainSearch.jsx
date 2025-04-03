import React from 'react';
import { IoSearch } from "react-icons/io5";
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainSearch(props) {
    return (
        <div css={s.searchLayout}>
            <div css={s.inputLayout}>
                <input type="text" />
            </div>
            <div css={s.buttonLayout}>
                <button><IoSearch /></button>
            </div>
        </div>
    );
}

export default MainSearch;
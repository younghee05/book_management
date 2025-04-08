import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useQuery } from '@tanstack/react-query';

function MainPage(props) {

    // 도서리스트(도서정보) 상태
    const [ bookList, setBookList ] = useState([]);

    // 도서정보를 가지고 오는 쿼리
    // const bookListQuery = useQuery(
    //     ["books"],
    //     async () => await instance.get("/book/get"),
    //     {
    //         retry: 0
    //     }

    // );
    
    return (
        <div css={s.layout}>
            <ui css={s.uiLayout}>
                <li css={s.liLayout}>
                    <div css={s.checkImgLayout}>
                        <div css={s.inputLayout}>
                            <input type="checkbox" />
                        </div>
                        <div css={s.imgLayout}>
                            <img src="" />
                        </div>
                    </div>
                    <div css={s.titleLayout}>
                        <p>도서명</p>
                        <p>저자</p>
                    </div>    
                </li>
            </ui>
        </div>
    );
}

export default MainPage;
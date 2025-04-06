import React, { useState } from 'react';
import MainSearch from '../MainSearch/MainSearch';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BookCreateModal from '../../Modal/BookCreateModal/BookCreateModal';

function MainHeader(props) {

    // 책 정보를 관리하는 상태 
    const [ books, setBooks ] = useState({
        
        title: "",
        content: "",
        author: "",
        genreId: 1,
        publisher: "",
        bookImg: ""
    
    });

    // 모달 띄우는 상태 
    const [ openModal, setOpenModal ] = useState(false);

    // 모달창 닫기
    const closeModal = () => {
        setOpenModal(false);

        // 취소 또는 modal창을 껏을 경우 데이터값 초기화 
        setBooks({
            title: "",
            content: "",
            author: "",
            genreId: 1,
            publisher: "",
            bookImg: ""
        })
    }

    return (    
        <div css={s.headerLayout}>
            <div css={s.box}>
                <MainSearch />
                <div css={s.buttonLayout}>
                    <button onClick={() => setOpenModal(true)}>추가</button>
                    <BookCreateModal isOpen={openModal} onClose={closeModal} 
                        books={books} setBooks={setBooks} /> {/* 책 정보 상태값과 modal창 여닫기 기능을 BookCreateModal에 넘긴다 */}
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
import React, { useState } from 'react';
import MainSearch from '../MainSearch/MainSearch';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import BookCreateModal from '../../Modal/BookCreateModal/BookCreateModal';

function MainHeader(props) {

    // 모달 띄우는 상태 
    const [ openModal, setOpenModal ] = useState(false);

    // 모달창 닫기
    const closeModal = () => {
        setOpenModal(false);
    }

    return (    
        <div css={s.headerLayout}>
            <div css={s.box}>
                <MainSearch />
                <div css={s.buttonLayout}>
                    <button onClick={() => setOpenModal(true)}>추가</button>
                    <BookCreateModal isOpen={openModal} onClose={closeModal} />
                    <button>수정</button>
                    <button>삭제</button>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;
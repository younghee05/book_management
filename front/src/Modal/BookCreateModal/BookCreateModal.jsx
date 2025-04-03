import React, { useCallback, useState } from 'react';
import ReactModal from 'react-modal';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { genres } from '../../constants/genres/genres';
import { instance } from '../../apis/util/instance';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from '../../firebase/firebase';

/*

- book_tb (책 정보관리)
    book_id       
    title(제목)   
    content (내용 or 줄거리) 
    author (작가) 
    genre_id (장르) 
    publisher (출판사)  
    bookImg (책 이미지(사진))  
    bookData (출판년도) 

*/

function BookCreateModal({ isOpen, onClose }) {

    // 추가할 책 정보를 담는 상태 
    const [ books, setBooks ] = useState({
        
        title: "",
        content: "",
        author: "",
        genreId: 1,
        publisher: "",
        bookImg: ""

    });

    // 이미지 업로드 상태 관리 기본 상태를 false로 지정 
    // const [ imgUpload, setImgUpload ] = useState(false);

    // // << firebase 오류 발생(미해결) >> 
    // // 이미지 업로드 함수 
    // // useCallback을 사용하여 새로 랜더링되기 전까지 저장하여 반환함 / 불필요한 재생성(재렌더링)을 방지하기 위함 
    // // 예) 이미지를 새로 불러오지 않은 이상 처음에 불러온 이미지가 그대로 함수에 담겨 있다 
    // const handleImgUpload = useCallback((type) => {

    //     // 동적으로 요소추가하기 
    //     // Element는 불변성의 객체이므로 element를 업데이트하기 위해서는 새롭게 만들어야 한다. 
    //     const input = document.createElement('input'); // <input /> 태그 추가 / document.createElement : 해당 요소의 태그추가

    //     // img를 업로드하기위해 input 타입을 file로 지정함 
    //     input.setAttribute("type", "file"); // <input type="file" /> 을 뜻 / setAttribuute : input태그안에 속성을 추가한다(기존것은 변경해줌) 

    //     input.click(); // 버튼을 클릭할 시 작동 / 예) input의 타입이 file이므로 이미지의 파일을 선택할 수 있게 해준다.

    //     // 파일 설정
    //     input.onchange = () => {

    //         // 이미지 파일들(input변수안에 저장된 파일들)을 files에 배열 형태로 저장함 ?? 
    //         const files = Array.from(input.files);
    //         // 파일들이 바뀔때마다 imgFile에 저장함 
    //         const imgFile = files[0]; // files 배열에 0번째 데이터값을 imgFile에 저장함 

    //         // uuid: 고유한 아이디 값을 생성할 때 사용함
    //         // url형태로 http://localhost:3000에  "/book/img/(고유한 아이디값)_(img url or 이름)" 붙여져서 storageRef 변수에 저장함
    //         const storageRef = ref(storage, `book/img/${uuid()}_${imgFile.name}`);

    //         // uploadBytesResumable : firebase 스토리지(저장소)에 파일을 업로드할 때 사용하는 함수 
    //         const task = uploadBytesResumable(storageRef, imgFile); // 파이어베이스 스토리지에 storageRef, imgFile에 저장된 데이터 값을 task변수에 담음 
    //         setImgUpload(true); // 이미지를 업로드할 시 상태를 true로 업데이트시킴(=> 업로드한 이미지를 보이게 함) 

    //         task.on(
    //             "state_chage", // eventName
    //             () => {}, // 업로드 중 상태 핸들링 (옵션)
    //             async () => {

    //                 const url = await getDownloadURL(storageRef); // storageRef에 저장된(업로드 완료된) 파일을 url 변수에 담음  

    //                 setImgUpload(false);

    //                 setBooks((book) => ({
    //                     ...book, 
    //                     bookImg: url // bookImg는 url에 저장한 파일로 상태를 업데이트함 

    //                 }));
    //             }
    //         )

    //     }

    // }, []);

    

    // 장르 목록 선택 
    const handleGenreOnChange = (e) => {

        // selectId는 가지고 오는 value값을 정수로 바꿔줌 / 진수를 10진수로 지정 (생략하면 안됨(defalut가 10이 아니기 때문))
        const selectId = parseInt(e.target.value, 10)
        setBooks((book) => ({
            ...book, // 전체 책 정보
            genreId: selectId // 장르를 selectId로 지정 : 해당 e.target.value값 마다 바뀜 
        })); // 상태 업데이트 

    }

    // 입력창 onChange
    const handleInputOnchange = (e) => {

        setBooks((book) => ({
            ...book,
            [e.target.name] : e.target.value
        }))

    }

    // 추가 완료 확인 버튼
    const handleSubmitOnClick = async() => {
        try {

            // 입력한 데이터 값을 books에 담아 함께 back으로 요청과 데이터값을 보냄 
            await instance.post("/book/create", books);

            console.log(books);

            alert("책이 등록되었습니다.");
            setBooks({

                title: "",
                content: "",
                author: "",
                genreId: 1,
                publisher: "",
                bookImg: ""

            });

            onClose(true);

        } catch (e) {
            console.error(e);
        }

    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={{
                overlay: { // 바깥 면
                        position: "fixed",
                        zIndex: "2",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    content: { // 내부 면
                        position: "static",
                        backgroundColor: "white",
                        padding: "20px",
                        width: "700px",
                        height: "auto",
                        overflow: "auto",
                        inset: "auto"
                    }
            }}
        >

            <div>
                <p>도서추가</p>
                <div>
                    <input type="text" placeholder='도서명을 입력해주세요.' 
                        name='title' value={books.title} onChange={handleInputOnchange}/>
                    <div>
                        <input type="text" placeholder='저자명을 입력해주세요.'
                            name='author' value={books.author} onChange={handleInputOnchange} />
                        <input type="text" placeholder='출판사를 입력해주세요'
                            name='publisher' value={books.publisher} onChange={handleInputOnchange} />
                    </div>
                    <div>
                        <select 
                            name="genreId"
                            value={books.genreId} 
                            onChange={handleGenreOnChange} >
                                {
                                    genres.map(genre => (
                                        <option value={genre.id}>{genre.genre}</option>
                                    ))
                                }
                        </select>
                        <input type="date"  /> {/* 날짜 (무조건 최신날짜로 지정) */}
                    </div>
                    <div>
                        <div>
                            <textarea type="text" placeholder='내용을 입력해주세요.'
                                name='content' value={books.content} onChange={handleInputOnchange} /> 
                        </div>
                        <div>
                            <button >이미지 추가</button>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleSubmitOnClick}>확인</button>
                    <button onClick={onClose}>취소</button>
                </div>
            </div>
            
        </ReactModal>
    );
}

export default BookCreateModal;
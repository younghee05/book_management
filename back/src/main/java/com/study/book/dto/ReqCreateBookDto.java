package com.study.book.dto;

import com.study.book.entity.Book;
import lombok.Builder;
import lombok.Data;

/*

- book_tb (책 정보관리)
    book_id
    title(제목)
    content (내용 or 줄거리)
    author (작가)
    genre_id (장르)
    publisher (출판사)
    bookImg (책 이미지(사진))
    createData (출판년도)

*/

@Data
public class ReqCreateBookDto {

    private String title;
    private String content;
    private String author;
    private int genreId;
    private String publisher;
    private String bookImg;

    // Book entity를 사용하여 Dto 데이터값들을 builder를 이용하여 entity로 전환시켜 sevice로 전달
    public Book toBook() {
        return Book.builder()
                .title(title)
                .content(content)
                .author(author)
                .genreId(genreId)
                .publisher(publisher)
                .bookImg(bookImg)
                .build();
    }

}

package com.study.book.dto.response;

import com.study.book.entity.Book;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class RespLoadBookDto {

    private Long bookId;
    private String title;
    private String author;
    private String genre; // 장르 / 장르 Id를 이용하여 장르를 출력할 예정
    private String publisher;
    private String createAt;


}

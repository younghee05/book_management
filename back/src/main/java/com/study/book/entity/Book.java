package com.study.book.entity;


import com.study.book.dto.response.RespLoadBookDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Book {

    private Long bookId;
    private String title;
    private String content;
    private String author;
    private int genreId;
    private String genre; // 장르
    private String publisher;
    private String bookImg;
    private String createAt;

    public RespLoadBookDto toLoadBookDto() {
        return RespLoadBookDto.builder()
                .bookId(bookId)
                .title(title)
                .author(author)
                .genre(genre)
                .publisher(publisher)
                .createAt(createAt)
                .build();
    }

}

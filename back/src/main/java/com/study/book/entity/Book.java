package com.study.book.entity;

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
    private String publisher;
    private String bookImg;
    private String createData;

}

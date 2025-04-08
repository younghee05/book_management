package com.study.book.dto.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReqLoadBookDto {

    private Long bookId;
    private String title;
    private String author;
    private int genreId;
    private String publisher;
    private String createAt;

}

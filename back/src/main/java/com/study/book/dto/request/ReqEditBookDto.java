package com.study.book.dto.request;

import com.study.book.entity.Book;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ReqEditBookDto {

    private Long bookId;
    private String title;
    private String content;
    private String author;
    private int genreId;
    private String publisher;
    private String bookImg;

    public Book toEditBook() {
        return Book.builder()
                .bookId(bookId)
                .title(title)
                .content(content)
                .author(author)
                .genreId(genreId)
                .publisher(publisher)
                .bookImg(bookImg)
                .build();
    }

}

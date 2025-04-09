package com.study.book.repository;

import com.study.book.entity.Book;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BookMapper {

    int createBook(Book book);

    List<Book> loadBooks();

    int editBook(Book book);

    int deleteBook(Long bookId);

}

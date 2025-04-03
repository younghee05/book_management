package com.study.book.repository;

import com.study.book.entity.Book;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface BookMapper {

    int createBook(Book book);

}

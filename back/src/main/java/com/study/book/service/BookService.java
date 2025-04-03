package com.study.book.service;

import com.study.book.dto.ReqCreateBookDto;
import com.study.book.entity.Book;
import com.study.book.repository.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookService {

    @Autowired
    private BookMapper bookMapper;

    public int creatBook(ReqCreateBookDto dto) {

        return bookMapper.createBook(dto.toBook());

    }

}

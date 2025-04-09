package com.study.book.service;

import com.study.book.dto.request.ReqCreateBookDto;
import com.study.book.dto.request.ReqEditBookDto;
import com.study.book.dto.response.RespLoadBookDto;
import com.study.book.entity.Book;
import com.study.book.repository.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookMapper bookMapper;

    public int creatBook(ReqCreateBookDto dto) {

        return bookMapper.createBook(dto.toBook());

    }

    // List<Entity> / 책 정보 리스트
    public List<RespLoadBookDto> loadBook() {

        List<Book> bookList = bookMapper.loadBooks();
        List<RespLoadBookDto> bookDtoList = new ArrayList<>();

        // 반복해서 새로운 배열에 넣기 / bookList 안에 있는 데이터 값을 book(변수)에 옮겨 담아 bookDtoList에 담아 리턴함
        for (Book book : bookList) {
            bookDtoList.add(book.toLoadBookDto());
        }

        return bookDtoList;

    }

    public int editBook(ReqEditBookDto dto) {
        return bookMapper.editBook(dto.toEditBook());
    }

}

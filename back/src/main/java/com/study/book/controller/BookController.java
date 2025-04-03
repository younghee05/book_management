package com.study.book.controller;

import com.study.book.dto.ReqCreateBookDto;
import com.study.book.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/book") // "/book"을 기준으로 프론트에서 요청받기
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    private BookService bookService;

    @PostMapping("/create")
    public ResponseEntity<?> createBook(@RequestBody ReqCreateBookDto dto) {

        System.out.println(dto);

        bookService.creatBook(dto);
       return ResponseEntity.ok().body(true);
    }

}

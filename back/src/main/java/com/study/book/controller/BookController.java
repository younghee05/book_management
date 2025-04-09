package com.study.book.controller;

import com.study.book.dto.request.ReqCreateBookDto;
import com.study.book.dto.request.ReqEditBookDto;
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

    // 책 정보 추가 응답
    @PostMapping("/create")
    public ResponseEntity<?> createBook(@RequestBody ReqCreateBookDto dto) {

       System.out.println(dto);

       bookService.creatBook(dto);
       return ResponseEntity.ok().body(true);
    }

    // 책 조회
    @GetMapping("/get")
    public ResponseEntity<?> loadBook() {

        return ResponseEntity.ok().body(bookService.loadBook());
    }

    // 책 정보 수정
    @PutMapping("/edit")
    public ResponseEntity<?> editBook(@RequestBody ReqEditBookDto dto) {

        return ResponseEntity.ok().body(bookService.editBook(dto));
    }

}

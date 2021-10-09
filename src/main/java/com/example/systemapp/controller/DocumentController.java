package com.example.systemapp.controller;
import com.example.systemapp.model.dto.DocumentDto;
import com.example.systemapp.repository.DocumentRepository;
import com.example.systemapp.service.DocumentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/document")
@RequiredArgsConstructor
//@Slf4j
public class DocumentController {

    private final DocumentService documentService;
    private final DocumentRepository documentRepository;

    @PostMapping("/addDocument")
    public ResponseEntity<?> saveDocument (@RequestBody DocumentDto documentDto){
        System.out.println("DocumentController -> addDocument :: " + documentDto.getId());
        try{
            return ResponseEntity.status(HttpStatus.OK).body(documentService.saveDocument(documentDto));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_DC");
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> findAllDocuments(){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(documentService.getAll());
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_DC");
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<?> findDocumentById(@PathVariable Long id){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(documentService.getDocumentDtoById(id));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_DC");
        }

    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Long id){
        try{
            documentService.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_DC");
        }
    }

    /**
     * Aktualizacja dokumentu na bazie danych.
     * @param id
     * @param documentDto
     * @return
     */


    @PatchMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody DocumentDto documentDto){
//        log.debug("update :: id :: {} :: documentDto :: {}", id, documentDto);
//        System.out.println(documentDto);

        try {
            return ResponseEntity.status(HttpStatus.OK).body(documentService.updateDocument(id, documentDto));
        } catch (Exception e) {
            throw new RuntimeException("SERVER_INTERNAL_ERROR");
        }
    }

    @GetMapping("/empDoc")
    public ResponseEntity<?> findDocWithEmp(){
        try {
            return ResponseEntity.status(HttpStatus.OK).body(documentRepository.getDocumentAndFirstNameAndSurnameEmployee());
        } catch (Exception e) {
            throw new RuntimeException("SERVER_INTERNAL_ERROR");
        }
    }
}

package com.example.systemapp.controller;

import com.example.systemapp.model.Transaction;
import com.example.systemapp.model.dto.TransactionDto;
import com.example.systemapp.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/add")
    public ResponseEntity<?> addTransaction(@RequestBody TransactionDto transactionDto){
        return ResponseEntity.status(HttpStatus.OK).body(transactionService.saveTransaction(transactionDto));
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> findAllTransactiones(){
        return ResponseEntity.status(HttpStatus.OK).body(transactionService.getAll());
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<?> findTransactionById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(transactionService.getTransactionDtoById(id));
    }

    @GetMapping("/findByDocumentId/{id}")
    public ResponseEntity<?> findTransactionByDocumentId(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(transactionService.getTransactionDtoByDocumentId(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(transactionService.deleteById(id));
    }

    @PatchMapping("/update/{id}")
    public void update(@PathVariable Long id, @RequestBody TransactionDto transactionDto){
        ResponseEntity.status(HttpStatus.OK).body(transactionService.updateTransaction(id,transactionDto));
    }



}

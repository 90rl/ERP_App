package com.example.systemapp.service;

import com.example.systemapp.model.Transaction;
import com.example.systemapp.model.dto.TransactionDto;
import com.example.systemapp.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@EnableTransactionManagement
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final DocumentService documentService;

    @Transactional
    public TransactionDto saveTransaction (TransactionDto transactionDto){
        Transaction transaction = convertTransactionDtoToEntity(transactionDto);
        transaction = transactionRepository.save(transaction);
        return convertTransactionToTransactionDto(transaction);
    }

    public List<TransactionDto> getAll(){
        return transactionRepository
                .findAll()
                .stream()
                .map(this::convertTransactionToTransactionDto)
                .collect(Collectors.toList());
    }

    public Transaction getById(Long id){
        return transactionRepository.findById((Long) id).orElse(null);
//            return repository.getById(id);
    }

    public TransactionDto getTransactionDtoById(Long id){
        Transaction transaction = transactionRepository.findById(id).orElse(null);
        assert transaction!=null;
        return convertTransactionToTransactionDto(transaction);
    }

    public List<TransactionDto> getTransactionDtoByDocumentId(Long id) {
        return transactionRepository
                .findByDocumentId(id)
                .stream()
                .map(this::convertTransactionToTransactionDto)
                .collect(Collectors.toList());
    }

    @Transactional
    public String deleteById(Long id){
        transactionRepository.deleteById(id);
        return "Success !!!";
    }

    public TransactionDto updateTransaction (Long id, TransactionDto transactionDto){
        Transaction transaction = transactionRepository.getById(id);
        transaction.setQuantity(transactionDto.getQuantity());
        transaction.setUnit(transactionDto.getUnit());
        transaction.setPricePerUnit(transactionDto.getPricePerUnit());
        transaction.setCurrency(transactionDto.getCurrency());
        transaction.setTransactionSubject(transactionDto.getTransactionSubject());
        transaction = transactionRepository.save(transaction);
        return convertTransactionToTransactionDto(transaction);
    }

    public TransactionDto convertTransactionToTransactionDto(Transaction transaction) {
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setDocumentId(transaction.getDocumentId().getId());
        transactionDto.setId(transaction.getId());
        transactionDto.setQuantity(transaction.getQuantity());
        transactionDto.setUnit(transaction.getUnit());
        transactionDto.setPricePerUnit(transaction.getPricePerUnit());
        transactionDto.setCurrency(transaction.getCurrency());
        transactionDto.setTransactionSubject(transaction.getTransactionSubject());
        return transactionDto;
    }

    public Transaction convertTransactionDtoToEntity(TransactionDto transactionDto) {
        Transaction transaction = new Transaction();
       // transaction.setDocumentId(documentService.getDocumentDtoById(transactionDto.getDocumentId()));
        transaction.setDocumentId(documentService.getById(transactionDto.getDocumentId()));
        transaction.setQuantity(transactionDto.getQuantity());
        transaction.setUnit(transactionDto.getUnit());
        transaction.setPricePerUnit(transactionDto.getPricePerUnit());
        transaction.setCurrency(transactionDto.getCurrency());
        transaction.setTransactionSubject(transactionDto.getTransactionSubject());
        return transaction;
    }



}

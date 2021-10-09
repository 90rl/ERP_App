package com.example.systemapp.model.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TransactionDto {
    private Long id;
    private Long documentId;
    private Integer quantity;
    private String unit;
    private Double pricePerUnit;
    private String currency;
    private String transactionSubject;
}

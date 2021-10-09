package com.example.systemapp.model.dto;
import com.example.systemapp.model.Company;
import com.example.systemapp.model.Employee;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
public class DocumentDto {

    private Long id;
    private Long employeeId; //who created document
    private Long companyId;  // who is client

    private Long deliveryCompanyId; // companyId where freight will be delivery
    private String documentNumber;
    private String documentType; // Order, Quote or different
    private String documentReference; // offer number from supplier
    private String realizationTerm;
    private String deliveryConditions;
    private String paymentConditions;
    private String documentAttention;
//    private LocalDateTime documentDate;  //creation date
    private String documentDate;  //creation date
    private Double totalPrice;
    private String currency;
    String employeeName;
    String employeeSurname;
    String clientName;
}

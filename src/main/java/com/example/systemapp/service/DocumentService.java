package com.example.systemapp.service;

import com.example.systemapp.model.Document;
import com.example.systemapp.model.Transaction;
import com.example.systemapp.model.dto.DocumentDto;
import com.example.systemapp.repository.DocumentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.time.format.DateTimeFormatter;

@Service
@RequiredArgsConstructor
@EnableTransactionManagement
public class DocumentService {

    private final DocumentRepository documentRepository;
    private final EmployeeService employeeService;
    private final CompanyService companyService;

    @Transactional
    public DocumentDto saveDocument (DocumentDto documentDto){

        Document document = convertDocumentDtoToEntity(documentDto);
        document = documentRepository.save(document);
        return convertDocumentToDocumentDto(document);
    }

    public List<DocumentDto> getAll(){
        return documentRepository
                .findAll()
                .stream()
                .map(this::convertDocumentToDocumentDto)
                .collect(Collectors.toList());
    }

    public Document getById(Long id){
        return documentRepository.findById((Long) id).orElse(null);
//            return repository.getById(id);
    }

    public DocumentDto getDocumentDtoById(Long id){
        Document document = documentRepository.findById(id).orElse(null);
        assert document!=null;
        return convertDocumentToDocumentDto(document);
    }


    @Transactional
    public String deleteById(Long id){
        documentRepository.deleteById(id);
        return "Success !!!";
    }

    public DocumentDto updateDocument(Long id, DocumentDto documentDto){
        Document document = documentRepository.getById(id);
        document.setEmployeeId(employeeService.getById(documentDto.getEmployeeId()));
        document.setCompanyId(companyService.getById(documentDto.getCompanyId()));
        document.setDeliveryAddress(companyService.getById(documentDto.getDeliveryCompanyId()));
        document.setDocumentNumber(documentDto.getDocumentNumber());
        document.setDocumentType(documentDto.getDocumentType());
        document.setDocumentReference(documentDto.getDocumentReference());
        document.setRealizationTerm(documentDto.getRealizationTerm());
        document.setDeliveryConditions(documentDto.getDeliveryConditions());
        document.setPaymentConditions(documentDto.getPaymentConditions());
        document.setDocumentAttention(documentDto.getDocumentAttention());
        document.setDocumentDate(LocalDateTime.now());
        document.setTotalPrice(documentDto.getTotalPrice());
        document.setCurrency(documentDto.getCurrency());
        //System.out.println("aaaaaaaaaa :: " + document);

        document = documentRepository.save(document);
        return convertDocumentToDocumentDto(document);
    }

    public DocumentDto convertDocumentToDocumentDto(Document document) {
        DocumentDto documentDto = new DocumentDto();
        documentDto.setId(document.getId());
        documentDto.setEmployeeId(document.getEmployeeId().getId());
        documentDto.setCompanyId(document.getCompanyId().getId());
        documentDto.setDeliveryCompanyId(document.getDeliveryAddress().getId());
        documentDto.setDocumentNumber(document.getDocumentNumber());
        documentDto.setDocumentType(document.getDocumentType());
        documentDto.setDocumentReference(document.getDocumentReference());
        documentDto.setRealizationTerm(document.getRealizationTerm());
        documentDto.setDeliveryConditions(document.getDeliveryConditions());
        documentDto.setPaymentConditions(document.getPaymentConditions());
        documentDto.setDocumentAttention(document.getDocumentAttention());
        documentDto.setDocumentDate(document.getDocumentDate().format(DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss")).toString());
        documentDto.setTotalPrice(document.getTotalPrice());
        documentDto.setCurrency(document.getCurrency());
        documentDto.setEmployeeName(employeeService.getById(document.getEmployeeId().getId()).getName());
        documentDto.setEmployeeSurname(employeeService.getById(document.getEmployeeId().getId()).getSurname());
        documentDto.setClientName(companyService.getById(document.getCompanyId().getId()).getName());
        return documentDto;
    }

    public Document convertDocumentDtoToEntity(DocumentDto documentDto) {
        Document document = new Document();
        document.setEmployeeId(employeeService.getById(documentDto.getEmployeeId()));
        document.setCompanyId(companyService.getById(documentDto.getCompanyId()));
        document.setDeliveryAddress(companyService.getById(documentDto.getDeliveryCompanyId()));
        document.setDocumentNumber(documentDto.getDocumentNumber());
//        Autouzupełnienie numeru dokumenty rok,miesiąc,dzień, numer id dokumenu
//        document.setDocumentNumber(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd")));
        document.setDocumentType(documentDto.getDocumentType());
        document.setDocumentReference(documentDto.getDocumentReference());
        document.setRealizationTerm(documentDto.getRealizationTerm());
        document.setDeliveryConditions(documentDto.getDeliveryConditions());
        document.setPaymentConditions(documentDto.getPaymentConditions());
        document.setDocumentAttention(documentDto.getDocumentAttention());
        document.setDocumentDate(LocalDateTime.now());
        document.setTotalPrice(documentDto.getTotalPrice());
        document.setCurrency(documentDto.getCurrency());
        return document;
    }

}

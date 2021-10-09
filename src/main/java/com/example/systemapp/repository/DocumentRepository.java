package com.example.systemapp.repository;

import com.example.systemapp.model.Document;
import com.example.systemapp.model.dto.DocumentAndEmployeeDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DocumentRepository extends JpaRepository<Document, Long> {

    @Query(value =
            "SELECT doc AS document " +
                    "FROM Document doc " )

    List<DocumentAndEmployeeDto> getDocumentAndFirstNameAndSurnameEmployee();
//
//    @Query(value =
//            "SELECT doc AS document, e.name AS employeeName, e.surname AS employeeSurname " +
//                    "FROM Document doc " +
//                    "LEFT JOIN Employee e on doc.employeeId.id= e.id " +
//                    "GROUP BY " +
//                    "    doc.id, e.name, doc, e.surname")
//    List<DocumentAndEmployeeDto> getDocumentAndFirstNameAndSurnameEmployee();

}

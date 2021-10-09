package com.example.systemapp.repository;

import com.example.systemapp.model.Transaction;
import com.example.systemapp.model.dto.TransactionDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {


//    @Query(value =
//            "SELECT doc AS document " +
//                    "FROM Transaction doc " )

//    @Query(value ="SELECT t FROM Transaction t WHERE Transaction.documentId.id = 14")
//    List<Transaction> findByDocumentId(Long id);

    @Query("SELECT t FROM Transaction t WHERE t.documentId.id =:id")
    List<Transaction> findByDocumentId( Long id);

}

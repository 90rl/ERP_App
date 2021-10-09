package com.example.systemapp.model;
import lombok.*;
import org.hibernate.Hibernate;
import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
public class Transaction {
// this class include single transactions from official documents as Order or Quote
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Document documentId;

    private Integer quantity;
    private String unit;
    private Double pricePerUnit;
    private String currency;
    private String transactionSubject;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Transaction that = (Transaction) o;

        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return 304080742;
    }

}

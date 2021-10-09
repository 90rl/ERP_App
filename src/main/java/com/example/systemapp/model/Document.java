package com.example.systemapp.model;
import lombok.*;
import org.hibernate.Hibernate;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
public class Document {
    // example order or Quote
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private Employee employeeId; //who created document

    @ManyToOne
    private Company companyId;  // who is client

    @ManyToOne
    private Company deliveryAddress; // From companies

    private String documentNumber;
    private String documentType; // Order, Quote or different
    private String documentReference; // offer number from supplier
    private String realizationTerm;
    private String deliveryConditions;
    private String paymentConditions;
    private String documentAttention;
//    private LocalDateTime documentDate;  //creation date
    private LocalDateTime documentDate;  //creation date
    private Double totalPrice;
    private String currency;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Document document = (Document) o;

        return Objects.equals(id, document.id);
    }

    @Override
    public int hashCode() {
        return 1422296640;
    }
}

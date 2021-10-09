package com.example.systemapp.model;
import lombok.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;

@Getter
@Setter
@Entity
@ToString
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String street;
    private String streetNumber;
    private String localNumber;
    private String postcode;
    private String city;
    private String nip;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Company company = (Company) o;
        return Objects.equals(id, company.id) && Objects.equals(name, company.name) && Objects.equals(street, company.street)
                && Objects.equals(streetNumber, company.streetNumber) && Objects.equals(localNumber, company.localNumber)
                && Objects.equals(postcode, company.postcode) && Objects.equals(city, company.city) && Objects.equals(nip, company.nip);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, street, streetNumber, localNumber, postcode, city, nip);
    }

}

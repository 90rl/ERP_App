package com.example.systemapp.model.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CompanyDto {
    private Long id;
    private String name;
    private String street;
    private String streetNumber;
    private String localNumber;
    private String postcode;
    private String city;
    private String nip;
}

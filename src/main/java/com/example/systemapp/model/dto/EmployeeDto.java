package com.example.systemapp.model.dto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmployeeDto {
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String password;
}
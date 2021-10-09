package com.example.systemapp.repository;

import com.example.systemapp.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

     Optional<Employee> findByEmail(String email);
}

package com.example.systemapp.service;
import com.example.systemapp.model.Employee;
import com.example.systemapp.model.dto.EmployeeDto;
import com.example.systemapp.model.dto.LoginDto;
import com.example.systemapp.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@EnableTransactionManagement

public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public EmployeeDto saveEmployee (EmployeeDto employeeDto){
        Employee employee=convertEmployeeDtoToEntity(employeeDto);
        employee=employeeRepository.save(employee);
        return convertEmployeeToEmployeeDto(employee);
    }


    public List<EmployeeDto> getAll(){
        return employeeRepository.
                findAll()
                .stream()
                .map(this::convertEmployeeToEmployeeDto)
                .collect(Collectors.toList());
    }

    public Employee getById(Long id){
        return employeeRepository.findById((Long) id).orElse(null);
    }

    public EmployeeDto getEmployeeDtoById(Long id){
        Employee employee = employeeRepository.findById(id).orElse(null);
        assert employee != null;
        return convertEmployeeToEmployeeDto(employee);
    }

    @Transactional
    public String deleteById(Long id){
        employeeRepository.deleteById(id);
        return "Success !!!";
    }

    public EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto){
        Employee employee = employeeRepository.getById(id);
        if(employeeDto.getName() != null)
        employee.setName(employeeDto.getName());
        if(employeeDto.getSurname() != null)
        employee.setSurname(employeeDto.getSurname());
        if(employeeDto.getEmail() != null)
        employee.setEmail(employeeDto.getEmail());
        if(employeeDto.getPassword() != null)
        employee.setPassword(employeeDto.getPassword());
        employee=employeeRepository.save(employee);
        return convertEmployeeToEmployeeDto(employee);
    }

    public EmployeeDto updatePassword(Long id, String password){
        Employee employee = employeeRepository.getById(id);
        employee.setPassword(password);
        employee=employeeRepository.save(employee);
        return convertEmployeeToEmployeeDto(employee);
    }

    public EmployeeDto convertEmployeeToEmployeeDto(Employee employee) {
        EmployeeDto employeeDto = new EmployeeDto();
        employeeDto.setId(employee.getId());
        employeeDto.setName(employee.getName());
        employeeDto.setSurname(employee.getSurname());
        employeeDto.setEmail(employee.getEmail());
        employeeDto.setPassword(employee.getPassword());
        return employeeDto;
    }

    public Employee convertEmployeeDtoToEntity(EmployeeDto employeeDto) {
        Employee employee = new Employee();
        employee.setId(employeeDto.getId());
        employee.setName(employeeDto.getName());
        employee.setSurname(employeeDto.getSurname());
        employee.setEmail(employeeDto.getEmail());
        employee.setPassword(employeeDto.getPassword());
        return employee;
    }

    public String findByEmail(LoginDto loginDto) {
        String message;
        Optional<Employee> employee = employeeRepository.findByEmail(loginDto.getEmail());
        if (employee.isPresent()) {
            if (employee.get().getPassword().equals(loginDto.getPassword())) {
                message = "OK";
            } else {
                message = "ERROR";
            }
        } else {
            message = "EMPLOYEE_WITH_GIVEN_EMAIL_NOT_EXIST";
        }
        return message;
    }
}

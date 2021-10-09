package com.example.systemapp.controller;
import com.example.systemapp.model.dto.EmployeeDto;
import com.example.systemapp.model.dto.LoginDto;
import com.example.systemapp.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public ResponseEntity<?> addEmployee (@RequestBody EmployeeDto employeeDto){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(employeeService.saveEmployee(employeeDto));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> getAll() throws Exception{
        try{
            return ResponseEntity.status(HttpStatus.OK).body(employeeService.getAll());
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }


    @GetMapping("/findById/{id}")
    public ResponseEntity<?> findDocumentById(@PathVariable Long id){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(employeeService.getEmployeeDtoById(id));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }


    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Long id){
        try{
            employeeService.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }

    @PatchMapping("/update/{id}")
    public void update(@PathVariable Long id, @RequestBody EmployeeDto employeeDto){
        try{
            employeeService.updateEmployee(id,employeeDto);
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> findByEmail (@RequestBody LoginDto loginDto){
        System.out.println("aaaaaaaaaaaa ::: {}   ");
        try{
            return ResponseEntity.status(HttpStatus.OK).body( employeeService.findByEmail(loginDto));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }

    @PutMapping("/update-pass/{id}")
    public void updatePassword(@PathVariable Long id, @RequestParam String password){
        try{
            employeeService.updatePassword(id,password);
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }

    @PutMapping("/update-emp/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable Long id, @RequestBody EmployeeDto employeeDto){
        try{
            return ResponseEntity.status(HttpStatus.OK).body(employeeService.updateEmployee(id, employeeDto));        }
        catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_EC");
        }
    }

}

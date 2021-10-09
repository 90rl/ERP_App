package com.example.systemapp.controller;
import com.example.systemapp.model.dto.CompanyDto;
import com.example.systemapp.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @PostMapping("/addCompany")
    public ResponseEntity<?> addCompany(@RequestBody CompanyDto companyDto) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(companyService.saveCompany(companyDto));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_CC");
        }
    }

    @GetMapping("/findAll")
    public ResponseEntity<?> getAll() throws Exception {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(companyService.getAll());
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_CC");
        }
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<?> findCompanyById(@PathVariable Long id) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(companyService.getCompanyDtoById(id));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_CC");
        }
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(companyService.deleteById(id));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_CC");
        }
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody CompanyDto companyDto) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(companyService.updateCompany(id, companyDto));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_CC");
        }

    }

    @PutMapping("/update-comp/{id}")
    public ResponseEntity<?> updateCompany(@PathVariable Long id, @RequestBody CompanyDto companyDto) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(companyService.updateCompany(id, companyDto));
        }catch (Exception e){
            throw new RuntimeException("SERVER_INTERNAL_ERROR_CC");
        }
    }
}



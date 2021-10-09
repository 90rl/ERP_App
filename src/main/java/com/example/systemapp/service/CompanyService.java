package com.example.systemapp.service;

import com.example.systemapp.model.Company;
import com.example.systemapp.model.dto.CompanyDto;
import com.example.systemapp.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@EnableTransactionManagement
@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Transactional
    public CompanyDto saveCompany (CompanyDto companyDto){
        Company company = convertCompanyDtoToEntity(companyDto);
        company = companyRepository.save(company);
        return convertCompanyToCompanyDto(company);
    }


    public List<CompanyDto> getAll(){
        return companyRepository
                .findAll()
                .stream()
                .map(this::convertCompanyToCompanyDto)
                .collect(Collectors.toList());
    }

    public Company getById(Long id){
            return companyRepository.findById((Long) id).orElse(null);
    }

    public CompanyDto getCompanyDtoById(Long id){
        Company company = companyRepository.findById(id).orElse(null);
        assert company != null;
        return convertCompanyToCompanyDto(company);
    }

    @Transactional
    public String deleteById(Long id){
        companyRepository.deleteById(id);
        return "Deleted";
    }

    @Transactional
    public CompanyDto updateCompany(Long id, CompanyDto companyDto){
        Company company = companyRepository.getById(id);
        if(company.getName() != null)
        company.setName(companyDto.getName());
        if(company.getCity() != null)
        company.setCity(companyDto.getCity());
        if(company.getPostcode() != null)
        company.setPostcode(companyDto.getPostcode());
        if(company.getStreet() != null)
        company.setStreet(companyDto.getStreet());
        if(company.getLocalNumber() != null)
        company.setLocalNumber(companyDto.getLocalNumber());
        if(company.getStreetNumber() != null)
        company.setStreetNumber(companyDto.getStreetNumber());
        if(company.getNip() != null)
        company.setNip(companyDto.getNip());


        company = companyRepository.save(company);
        return convertCompanyToCompanyDto(company);
    }

    public CompanyDto convertCompanyToCompanyDto(Company company) {
        CompanyDto companyDto = new CompanyDto();
        companyDto.setId(company.getId());
        companyDto.setName(company.getName());
        companyDto.setCity(company.getCity());
        companyDto.setPostcode(company.getPostcode());
        companyDto.setStreet(company.getStreet());
        companyDto.setLocalNumber(company.getLocalNumber());
        companyDto.setStreetNumber(company.getStreetNumber());
        companyDto.setNip(company.getNip());
        return companyDto;
    }

    public Company convertCompanyDtoToEntity(CompanyDto companyDto) {
        Company company = new Company();
        company.setName(companyDto.getName());
        company.setCity(companyDto.getCity());
        company.setPostcode(companyDto.getPostcode());
        company.setStreet(companyDto.getStreet());
        company.setLocalNumber(companyDto.getLocalNumber());
        company.setStreetNumber(companyDto.getStreetNumber());
        company.setNip(companyDto.getNip());
        return company;
    }

}

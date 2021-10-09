package com.example.systemapp.authentication;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers(HttpMethod.GET,  "/company", "/document", "/transaction").permitAll()
                .antMatchers(HttpMethod.POST, "/company", "/document", "/transaction").permitAll()
                .antMatchers(HttpMethod.DELETE, "/employee").hasAnyRole("MODERATOR", "ADMIN")
                .and()
                .formLogin()
                .permitAll()
                .and()
                .logout()
                .permitAll();
        http.csrf().disable();

    }
}

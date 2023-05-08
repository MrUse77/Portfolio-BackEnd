/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.security;

import com.example.portfolio.portfolio.service.SecurityUserDetailsService;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 *
 * @author agust
 */
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter{

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        AuthCredentials authCredentials = new AuthCredentials();
        try{
            authCredentials = new ObjectMapper().readValue(request.getReader(),AuthCredentials.class);
        } catch (IOException e) {
        }
        UsernamePasswordAuthenticationToken usernamePAT = new UsernamePasswordAuthenticationToken(
                authCredentials.getUser(),
                authCredentials.getPassword(),
                Collections.emptyList()
        );
        
        return getAuthenticationManager().authenticate(usernamePAT);
        
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        SecurityUser userDetails = (SecurityUser) authResult.getPrincipal();
        String token = TokenUtils.createToken(userDetails.getUsername(), userDetails.getPassword());
        response.addHeader("Authorization", "Bearer " + token);
        response.getWriter().flush();
        super.successfulAuthentication(request, response, chain, authResult);
    }
    
    
  
    
    
}

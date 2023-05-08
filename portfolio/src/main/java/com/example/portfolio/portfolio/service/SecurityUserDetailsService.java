/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
*/
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazPersona;
import com.example.portfolio.portfolio.modelo.persona;
import com.example.portfolio.portfolio.security.SecurityUser;
import java.util.logging.Logger;
import static org.springframework.boot.context.properties.PropertyMapper.get;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.stereotype.Service;

/**
 *
 * @author agust
 */
@Service
public class SecurityUserDetailsService implements UserDetailsService{

    private static final Logger logger = Logger.getLogger(SecurityUserDetailsService.class.getName());

    
    private final InterfazPersona PersoRepo;
    
      public SecurityUserDetailsService(InterfazPersona PersoRepo) {
        this.PersoRepo = PersoRepo;
    }
 @Override
public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    logger.info("Buscando usuario con nombre de usuario: " + username);
    var user = this.PersoRepo.findByUser(username);
    if(user.isPresent()){
        return new SecurityUser(user.get());
    }
    throw new UsernameNotFoundException(username + "User not found");
}

    
   
    
}
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.interfaces;


import com.example.portfolio.portfolio.enums.AuthorityName;
import com.example.portfolio.portfolio.modelo.authority;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterfazAuthority extends JpaRepository<authority,Long> {
    
Optional <authority> findByName(AuthorityName name); 
    
}

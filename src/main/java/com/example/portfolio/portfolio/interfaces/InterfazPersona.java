/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.interfaces;

import com.example.portfolio.portfolio.modelo.persona;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import org.springframework.stereotype.Repository;

/**
 *
 * @author agust
 */
@Repository
public interface InterfazPersona extends JpaRepository<persona, Long> {
    
    
    Optional<persona> findByUser(String user);


    Optional<persona> findById(Long id);
    
}
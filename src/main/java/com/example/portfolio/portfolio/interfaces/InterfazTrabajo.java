/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.interfaces;


import com.example.portfolio.portfolio.modelo.experiencialaboral;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author agust
 */
public interface InterfazTrabajo extends JpaRepository<experiencialaboral, Long>{
    
}

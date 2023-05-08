/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.interfaces;

import com.example.portfolio.portfolio.modelo.tipo_educacion;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author agust
 */
public interface InterfazTipoEdu extends JpaRepository<tipo_educacion, Long> {
    
}

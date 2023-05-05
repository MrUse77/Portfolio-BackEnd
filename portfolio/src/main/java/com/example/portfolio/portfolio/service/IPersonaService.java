/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.modelo.persona;
import java.util.List;
import java.util.UUID;

/**
 *
 * @author agust
 */
public interface IPersonaService {
    
    public List<persona> getPersonas();
    public void savePersona(persona pers);
    public void deletePersona(UUID id);
    public persona findPersona(UUID id);
    
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;


import com.example.portfolio.portfolio.modelo.authority;
import com.example.portfolio.portfolio.modelo.persona;
import java.util.List;

/**
 *
 * @author agust
 */
public interface IPersonaService {
    
    public List<persona> getPersonas();
    public List<authority> getAuthority();
    public void savePersona(persona pers);
    public void deletePersona(Long id);
    public persona findPersona(Long id);

    
    
}

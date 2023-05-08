/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazAuthority;
import com.example.portfolio.portfolio.interfaces.InterfazPersona;
import com.example.portfolio.portfolio.modelo.authority;

import com.example.portfolio.portfolio.modelo.persona;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author agust
 */
@Service
public class PersonaService implements IPersonaService{
    
    @Autowired
    private InterfazPersona PersoRepo;
    @Autowired
    private InterfazAuthority AuthRepo;

    @Override
    public List<persona> getPersonas() {
        List<persona> listaPersonas = PersoRepo.findAll();
        return listaPersonas;
    }

    @Override
    public void savePersona(persona pers) {
        PersoRepo.save(pers);
    }

    @Override
    public void deletePersona(Long id) {
        PersoRepo.deleteById(id);
    }
@Override
    public persona findPersona(Long id) {
        persona pers = PersoRepo.findById(id).orElse(null);
        return pers;
    }

    @Override
    public List<authority> getAuthority() {
        List<authority> listaAuth = AuthRepo.findAll();
        return listaAuth;
    }



    
}

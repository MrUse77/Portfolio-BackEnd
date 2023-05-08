/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazTrabajo;
import com.example.portfolio.portfolio.modelo.experiencialaboral;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author agust
 */
@Service
public class ExpLaboralService implements IExpLaboralService{
    
    @Autowired
    private InterfazTrabajo TrabRepo;

    @Override
    public List<experiencialaboral> getTrabajos() {
        List<experiencialaboral> listaTrabajo = TrabRepo.findAll();
        return listaTrabajo;
    }

    @Override
    public void saveTrabajos(experiencialaboral trab) {
       TrabRepo.save(trab);
    }

    @Override
    public void deleteTrabajos(Long id) {
        TrabRepo.deleteById(id);
    }

    @Override
    public experiencialaboral findTrabajos(Long id) {
        experiencialaboral trab = TrabRepo.findById(id).orElse(null);
        return trab;
    }
   @Override
    public experiencialaboral save(experiencialaboral trab) {
    return TrabRepo.save(trab);
}

    
}

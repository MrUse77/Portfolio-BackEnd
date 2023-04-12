/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazTipoTrabajo;
import com.example.portfolio.portfolio.modelo.tipo_trabajo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author agust
 */
@Service
public class TipoTrabajoService implements ITipoTrabajoService{
    
    @Autowired
    private InterfazTipoTrabajo TipoTrabajoRepo;

    @Override
    public List<tipo_trabajo> getTipoTrabajos() {
        List<tipo_trabajo> listaTipoTrabajo = TipoTrabajoRepo.findAll();
        return listaTipoTrabajo;
    }

    @Override
    public void saveTipoTrabajos(tipo_trabajo tipT) {
        TipoTrabajoRepo.save(tipT);
    }
    
}

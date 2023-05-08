/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazTipoEdu;
import com.example.portfolio.portfolio.modelo.tipo_educacion;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author agust
 */
@Service
public class TipoEducacionService implements ITipoEducacionService{
    @Autowired
    private InterfazTipoEdu TipoEducacionRepo;

    @Override
    public List<tipo_educacion>getTipoEducacion() {
        List<tipo_educacion> listaTipoEducacion = TipoEducacionRepo.findAll();
        return listaTipoEducacion;
    }


    @Override
    public void saveTipoEducacion(tipo_educacion tipE) {
        TipoEducacionRepo.save(tipE);
    }
}

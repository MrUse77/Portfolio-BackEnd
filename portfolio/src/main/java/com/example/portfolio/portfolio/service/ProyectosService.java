/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazProyecto;
import com.example.portfolio.portfolio.modelo.proyectos;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author agust
 */
@Service
public class ProyectosService implements IProyectosService{
    
    @Autowired
    private InterfazProyecto ProyectRepo;
    

    @Override
    public List<proyectos> getProyectos() {
        List<proyectos> listaProyectos = ProyectRepo.findAll();
        return listaProyectos;
    }

    @Override
    public void saveProyectos(proyectos pro) {
        ProyectRepo.save(pro);
    }

    @Override
    public void deleteProyectos(Long id) {
        ProyectRepo.deleteById(id);
    }

    @Override
    public proyectos findProyectos(Long id) {
        proyectos pro = ProyectRepo.findById(id).orElse(null);
        return pro;
    }
    
}

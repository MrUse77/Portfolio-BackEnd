/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.modelo.proyectos;
import java.util.List;

/**
 *
 * @author agust
 */
public interface IProyectosService {
    
    public List<proyectos> getProyectos();
    public void saveProyectos(proyectos pro);
    public void deleteProyectos(Long id);
    public proyectos findProyectos(Long id);
}

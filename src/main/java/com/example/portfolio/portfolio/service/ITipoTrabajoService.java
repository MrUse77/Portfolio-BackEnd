/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.modelo.tipo_trabajo;
import java.util.List;

/**
 *
 * @author agust
 */
public interface ITipoTrabajoService {
    
    public List<tipo_trabajo> getTipoTrabajos();
    public void saveTipoTrabajos(tipo_trabajo tipT);
    
}

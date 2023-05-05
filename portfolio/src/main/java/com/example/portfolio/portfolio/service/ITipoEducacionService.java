/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.modelo.tipo_educacion;
import java.util.List;

/**
 *
 * @author agust
 */
public interface ITipoEducacionService {
    public List<tipo_educacion> getTipoEducacion();
    public void saveTipoEducacion(tipo_educacion tipE);
}

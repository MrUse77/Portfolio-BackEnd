/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.modelo.educacion;
import java.util.List;


public interface IEducacionService {
    
    public List<educacion>GetEducacion();
    public void saveEducacion(educacion edu);
    public void deleteEducacion(Long id);
    public educacion findEducacion(Long id);
    public educacion save(educacion edu);
    
}

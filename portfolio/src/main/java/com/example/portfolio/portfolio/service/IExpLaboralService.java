/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.modelo.experiencialaboral;
import java.util.List;

/**
 *
 * @author agust
 */
public interface IExpLaboralService {
    public List<experiencialaboral> getTrabajos();
    public void saveTrabajos(experiencialaboral trab);
    public void deleteTrabajos(Long id);
   public experiencialaboral findTrabajos(Long id);
}

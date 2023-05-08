/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.interfaces.InterfazEducacion;
import com.example.portfolio.portfolio.modelo.educacion;
import java.nio.file.Path;
import java.nio.file.Paths;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author agust
 */
@Service
public class EducacionService implements IEducacionService{
    
    @Autowired
    private InterfazEducacion EducacionRepo;
    

    @Override
    public List<educacion> GetEducacion() {
        List<educacion> listaEducacion = EducacionRepo.findAll();
        return listaEducacion;
    }

    @Override
    public void saveEducacion(educacion edu) {
        EducacionRepo.save(edu);
    }

    @Override
    public void deleteEducacion(Long id) {
        EducacionRepo.deleteById(id);
    }

    @Override
    public educacion findEducacion(Long id) {
        educacion edu = EducacionRepo.findById(id).orElse(null);
        return edu;
    }
    
    @Override
    public educacion save(educacion edu) {
    return EducacionRepo.save(edu);
}

    
}

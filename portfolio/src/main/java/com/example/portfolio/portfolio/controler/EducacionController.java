/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.educacion;
import com.example.portfolio.portfolio.service.IEducacionService;
import java.sql.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author agust
 */
@CrossOrigin(origins="/**", maxAge=3600)
@RestController
public class EducacionController {
    
    @Autowired
    private IEducacionService interEducacion;
    
    @GetMapping("/educacion/traer")
    public List<educacion> GetEducacion(){
    return interEducacion.GetEducacion();
    }
    @PostMapping("/educacion/crear")
    public String createProyecto(@RequestBody educacion edu){
        interEducacion.saveEducacion(edu);
        return "La institucion fue creada correctamente";
    }
    @DeleteMapping("/educacion/borrar/{id}")
    public String deleteEducacion(@PathVariable Long id){
        interEducacion.deleteEducacion(id);
        return "La institucion fue eliminada correctamente";
    }
    @PutMapping("/educacion/editar/{id}")
 public educacion editTrabajos (@PathVariable Long id,
                                        @RequestBody educacion nuevoEducacion) {
    educacion edu = interEducacion.findEducacion(id);

    edu.setNombreEducacion(nuevoEducacion.getNombreEducacion());
    edu.setTitulo(nuevoEducacion.getTitulo());
    edu.setFechaInicio(nuevoEducacion.getFechaInicio());
    edu.setFechaFin(nuevoEducacion.getFechaFin());
    edu.setTipo_Educacion(nuevoEducacion.getTipo_Educacion());
    edu.setLogo(nuevoEducacion.getLogo());

    return interEducacion.save(edu);
    
 }
}

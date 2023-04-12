/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.proyectos;
import com.example.portfolio.portfolio.service.IProyectosService;
import java.sql.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
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
@CrossOrigin(origins="http://localhost:4200", maxAge=3600)
@RestController
public class ProyectoController {
    @Autowired 
    private IProyectosService interProyecto;
    
    @GetMapping("/proyectos/traer")
    public List<proyectos> getProyectos(){
        return interProyecto.getProyectos();
    }
    
    @PostMapping("/proyectos/crear")
    public String createProyecto(@RequestBody proyectos pro){
        interProyecto.saveProyectos(pro);
        return "La persona fue creada correctamente";
    }
    
    @DeleteMapping("/proyectos/borrar/{id}")
    public String deleteProyecto(@PathVariable Long id){
        interProyecto.deleteProyectos(id);
        return "la persona fue eliminada correctamente";
    }
    
    @PutMapping("/proyectos/editar/{id}")
    public proyectos editPersona (@PathVariable Long id,
                                @RequestParam("NombreProyecto") String nuevoNombreProyecto,
                                @RequestParam("Fecha_Lanz") Date nuevoFecha_Lanz,
                                @RequestParam("Descripcion")String nuevaDescripcion){
    proyectos pro = interProyecto.findProyectos(id);
    
    pro.setNombreProyecto(nuevoNombreProyecto);
    pro.setFecha_Lanz(nuevoFecha_Lanz);
    pro.setDescripcion(nuevaDescripcion);
    
    return pro;
    }
}

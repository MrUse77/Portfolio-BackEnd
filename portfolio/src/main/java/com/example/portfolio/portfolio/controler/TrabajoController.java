/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.experiencialaboral;
import com.example.portfolio.portfolio.service.IExpLaboralService;
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
public class TrabajoController {
        @Autowired
    private IExpLaboralService interTrabajo;
    
    @GetMapping("/trabajos/traer")
    public List<experiencialaboral> getTrabajos(){
        return interTrabajo.getTrabajos();
    }
    
    @PostMapping("/trabajos/crear")
    public String createTrabajo(@RequestBody experiencialaboral trab){
        interTrabajo.saveTrabajos(trab);
        return "El trabajo fue creado correctamente";
    }
    
    @DeleteMapping("/trabajos/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        interTrabajo.deleteTrabajos(id);
        return "El trabajo fue eliminado correctamente";
    }
    
    @PutMapping("/trabajos/editar/{id}")
    public experiencialaboral editTrabajos (@PathVariable Long id,
                                @RequestParam("NombreEmpresa") String nuevoNombre,
                                @RequestParam("Descripcion") String nuevaDescripcion,
                                @RequestParam("FechaInicio")Date nuevaFechaInicio,
                                @RequestParam("FechaFIn")Date nuevaFechaFin,
                                @RequestParam("Logo")String nuevoLogo
                                ){
    experiencialaboral trab = interTrabajo.findTrabajos(id);
    
    trab.setNombreEmpresa(nuevoNombre);
    trab.setDescripcion(nuevaDescripcion);
    trab.setFechaInicio(nuevaFechaInicio);
    trab.setFechaFin(nuevaFechaFin);
    trab.setLogo(nuevoLogo);
    
    
    return trab;
    }
}

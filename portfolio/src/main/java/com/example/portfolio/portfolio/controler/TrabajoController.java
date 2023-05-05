/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.experiencialaboral;
import com.example.portfolio.portfolio.service.IExpLaboralService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
                                        @RequestBody experiencialaboral nuevoTrabajo) {
    experiencialaboral trab = interTrabajo.findTrabajos(id);

    trab.setNombreEmpresa(nuevoTrabajo.getNombreEmpresa());
    trab.setDescripcion(nuevoTrabajo.getDescripcion());
    trab.setFechaInicio(nuevoTrabajo.getFechaInicio());
    trab.setFechaFin(nuevoTrabajo.getFechaFin());
     trab.setTipoTrabajo(nuevoTrabajo.getTipoTrabajo());
    trab.setLogo(nuevoTrabajo.getLogo());
    return interTrabajo.save(trab);
    
}
    }

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.tipo_educacion;
import com.example.portfolio.portfolio.service.ITipoEducacionService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author agust
 */
@CrossOrigin(origins="/**", maxAge=3600)
@RestController
public class TipoEducacionController {
        @Autowired
    private ITipoEducacionService interTipoEducacion;
    
    @GetMapping("/tipoeducacion/traer")
    public List<tipo_educacion> getTipoEducacion(){
     return interTipoEducacion.getTipoEducacion();
    }
    
     @PostMapping("/tipoeducacion/crear")
     public String createTipoTrabajo(@RequestBody tipo_educacion tipE){
         interTipoEducacion.saveTipoEducacion(tipE);
         return "El tipo de trabajo fue creado correctamente";
     }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.tipo_trabajo;

import com.example.portfolio.portfolio.service.ITipoTrabajoService;
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
@CrossOrigin(origins="http://localhost:4200", maxAge=3600)
@RestController
public class TipoTrabajoController {
    
    @Autowired
    private ITipoTrabajoService interTipoTrabajos;
    
    @GetMapping("/tipotrabajo/traer")
    public List<tipo_trabajo> getTipoTrabajos(){
     return interTipoTrabajos.getTipoTrabajos();
    }
    
     @PostMapping("/tipotrabajo/crear")
     public String createTipoTrabajo(@RequestBody tipo_trabajo tipT){
         interTipoTrabajos.saveTipoTrabajos(tipT);
         return "El tipo de trabajo fue creado correctamente";
     }
    
}

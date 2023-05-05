/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.modelo.persona;
import com.example.portfolio.portfolio.service.IPersonaService;
import java.util.List;
import java.util.UUID;
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


@CrossOrigin(origins="http://localhost:4200", maxAge=3600)
@RestController
public class PersonaController {
    
    @Autowired
    private IPersonaService interPersona;
    
    @GetMapping("/personas/traer")
    public List<persona> getPersonas(){
        return interPersona.getPersonas();
    }
    
    @PostMapping("/personas/crear")
    public String createStudent(@RequestBody persona pers){
        interPersona.savePersona(pers);
        return "La persona fue creada correctamente";
    }
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable UUID id){
        interPersona.deletePersona(id);
        return "la persona fue eliminada correctamente";
    }
    
    @PutMapping("/personas/editar/{id}")
    public persona editPersona (@PathVariable UUID id,
                                @RequestParam("user") String nuevoUser,
                                @RequestParam("mail") String nuevoMail,
                                @RequestParam("password")String nuevoPassword){
    persona pers = interPersona.findPersona(id);
    
    pers.setUser(nuevoUser);
    pers.setMail(nuevoMail);
    pers.setPassword(nuevoPassword);
    
    return pers;
    }
}

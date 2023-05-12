/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.controler;

import com.example.portfolio.portfolio.enums.AuthorityName;
import static com.example.portfolio.portfolio.enums.AuthorityName.PUBLIC;
import com.example.portfolio.portfolio.interfaces.InterfazAuthority;
import com.example.portfolio.portfolio.interfaces.InterfazPersona;
import com.example.portfolio.portfolio.modelo.authority;

import com.example.portfolio.portfolio.modelo.persona;

import com.example.portfolio.portfolio.service.IPersonaService;
import jakarta.validation.Valid;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="/**", maxAge=3600)
@RestController
public class PersonaController {

   
    @Autowired
    private InterfazPersona personaRepo;
    @Autowired
    private IPersonaService interPersona;
        @Autowired
    private InterfazAuthority interAuth;
    
    @GetMapping("/personas/traer")
    public List<persona> getPersonas(){
       
        return interPersona.getPersonas();
    }
    
    @PostMapping("/personas/crear")
public String registerUser(@Valid @RequestBody persona usuario) {   
 PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Check if user already exist

    // Create new user's account
    persona user = new persona(usuario.getUser(), 
                               usuario.getMail(), 
                               passwordEncoder.encode(usuario.getPassword()), 
                               List.of(interAuth.findByName(AuthorityName.PUBLIC).get()));
    
    personaRepo.save(user);

    return "User registered successfully";
    }   
    
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id){
        interPersona.deletePersona(id);
        return "la persona fue eliminada correctamente";
    }
    
    @PutMapping("/personas/editar/{id}")
    public persona editPersona (@PathVariable Long id,
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

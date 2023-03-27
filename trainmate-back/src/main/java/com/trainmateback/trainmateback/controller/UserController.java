package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.exceptions.NotValidLogin;
import com.trainmateback.trainmateback.exceptions.UsernameExists;
import com.trainmateback.trainmateback.model.LoginRequest;
import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/userRegistry")
    ResponseEntity<String> userRegistry(@RequestBody TrainMateUser user) {
        try {
            userRepository.save(user);
            return ResponseEntity.ok("Usuario registrado correctamente");
        }
        catch (DataIntegrityViolationException e) {
            String errorMessage = "Email o Username no validos";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ocurrió un error al crear el usuario");
        }
    }

    @PostMapping("/userLogin")
    LoginRequest userLogin(@RequestBody LoginRequest user){
        if (!userRepository.existsByUsernameAndPassword(user.getUsername(), user.getPassword())){
            throw new NotValidLogin();
        }
        else {
            return user;
        }
    }

}

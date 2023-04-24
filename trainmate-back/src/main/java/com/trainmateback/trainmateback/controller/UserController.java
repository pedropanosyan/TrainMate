package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.exceptions.NotValidLogin;
import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/userRegistry")
    ResponseEntity<?> userRegistry(@RequestBody TrainMateUser user) {
        UUID uuid = UUID.randomUUID();
        String token = uuid.toString();
        user.setToken(token);
        if (userRepository.existsByEmail(user.getEmail()) || userRepository.existsByUsername(user.getUsername())) {
            String errorMessage = "Email o Username no validos";
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
        }
        else {
                userRepository.save(user);
                Map<String, String> response = new HashMap<>();
                response.put("token", token);
                return ResponseEntity.ok(response);
        }
    }

    @PostMapping("/userLogin")
    ResponseEntity<?> userLogin(@RequestBody TrainMateUser user){
        if (!userRepository.existsByUsernameAndPassword(user.getUsername(), user.getPassword())){
            throw new NotValidLogin();
        }
        UUID uuid = UUID.randomUUID();
        String token = uuid.toString();
        TrainMateUser user2 = userRepository.findByUsername(user.getUsername());
        user2.setToken(token);
        userRepository.save(user2);
        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/userSignOut")
    ResponseEntity<?> userSignOut(@RequestBody String token){
        token = token.substring(0, token.length()-1);
        TrainMateUser trainMateUser = userRepository.findByToken(token);
        trainMateUser.setToken(null);
        userRepository.save(trainMateUser);
        return ResponseEntity.ok("");
    }
}

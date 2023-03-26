package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    ResponseEntity<TrainMateUser> user(@RequestBody TrainMateUser user) {
        if (userRepository.existsByUsername(user.getUsername())){
            return ResponseEntity.badRequest().build();
        }
        else {
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }
    }
}

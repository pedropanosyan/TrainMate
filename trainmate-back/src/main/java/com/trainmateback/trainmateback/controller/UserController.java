package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    TrainMateUser user(@RequestBody TrainMateUser user) {
        return userRepository.save(user);
    }

}

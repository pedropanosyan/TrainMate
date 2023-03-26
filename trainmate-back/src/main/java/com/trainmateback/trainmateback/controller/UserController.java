package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.exceptions.NotValidLogin;
import com.trainmateback.trainmateback.exceptions.UserAlreadyExists;
import com.trainmateback.trainmateback.model.LoginRequest;
import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/userRegistry")
    TrainMateUser userRegistry(@RequestBody TrainMateUser user) {
        if (userRepository.existsByUsername(user.getUsername())){
            throw new UserAlreadyExists();
        }
        else {
            return userRepository.save(user);
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

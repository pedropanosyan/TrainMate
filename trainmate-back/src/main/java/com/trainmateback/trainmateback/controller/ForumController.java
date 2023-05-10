package com.trainmateback.trainmateback.controller;


import com.trainmateback.trainmateback.model.ForumPost;
import com.trainmateback.trainmateback.repository.ForumRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")

public class ForumController {
    @Autowired
    private ForumRepository forumRepository;

    @PostMapping("/createForumPost")
    ResponseEntity<?> createForumPost(@RequestBody ForumPost forumPost){
        UUID uuid = UUID.randomUUID();
        String token = uuid.toString();

        try {
            forumRepository.save(forumPost);
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response);
        }
        catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).
                    body("Ocurió un error al crear un post");
        }
    }

}
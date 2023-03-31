package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.RoutineWorkout;
import com.trainmateback.trainmateback.model.Routines;
import com.trainmateback.trainmateback.repository.RoutRepo;
import com.trainmateback.trainmateback.repository.RoutineRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoutineCont {

    private final RoutineRepository routineRepository;
    private final RoutRepo routRepo;

    public RoutineCont(RoutineRepository routineRepository, RoutRepo routRepo) {
        this.routineRepository = routineRepository;
        this.routRepo = routRepo;
    }

    @PostMapping("/newRoutine")
    public ResponseEntity<String> addNewRoutine(@RequestBody Routines routine) {
        System.out.println("Post recieved");
        routRepo.save(routine);
        return ResponseEntity.ok("New routine created successfully");
    }
}
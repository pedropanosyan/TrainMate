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

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class RoutineCont {

    private final RoutineRepository routineRepository;
    private final RoutRepo routRepo;

    public RoutineCont(RoutineRepository routineRepository, RoutRepo routRepo) {
        this.routineRepository = routineRepository;
        this.routRepo = routRepo;
    }

    @PostMapping("/userRoutineWorkout")
    public ResponseEntity<String> addUserRoutineWorkout(@RequestBody RoutineWorkout routineWorkout) {
        routineRepository.save(routineWorkout);
        return ResponseEntity.ok("Exercise registered successfully");
    }

    @PostMapping("/userRoutine")
    public ResponseEntity<String> addUserRoutine(@RequestBody Routines routines) {
        routRepo.save(routines);
        return ResponseEntity.ok("Routine registered successfully");
    }
}
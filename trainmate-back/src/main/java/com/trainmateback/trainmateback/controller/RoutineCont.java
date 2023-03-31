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

    @PostMapping("/newRoutine")
    public ResponseEntity<String> addNewRoutine(@RequestBody Map<String, Object> requestBody) {
        String name = (String) requestBody.get("name");
        int series = (int) requestBody.get("series");
        int reps = (int) requestBody.get("reps");

        List<RoutineWorkout> workouts = new ArrayList<>();
        RoutineWorkout workout = new RoutineWorkout(name, series, reps);
        workouts.add(workout);

        Routines newRoutine = new Routines(true, workouts);
        routRepo.save(newRoutine);
        return ResponseEntity.ok("New routine created successfully");
    }
}
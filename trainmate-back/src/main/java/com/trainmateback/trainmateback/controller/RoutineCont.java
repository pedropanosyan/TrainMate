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


    @PostMapping("/newRoutine")
    public ResponseEntity<String> addNewRoutine(@RequestBody Map<String, Object> requestBody) {
        List<Map<String, Object>> workouts = (List<Map<String, Object>>) requestBody.get("workouts");

        List<RoutineWorkout> routineWorkouts = new ArrayList<>();
        for (Map<String, Object> workout : workouts) {
            String name = (String) workout.get("name");
            int series = (int) workout.get("series");
            int reps = (int) workout.get("reps");
            RoutineWorkout routineWorkout = new RoutineWorkout(name, series, reps);
            routineWorkouts.add(routineWorkout);
        }

        Routines newRoutine = new Routines(true, routineWorkouts);
        routRepo.save(newRoutine);
        return ResponseEntity.ok("New routine created successfully");
    }
}
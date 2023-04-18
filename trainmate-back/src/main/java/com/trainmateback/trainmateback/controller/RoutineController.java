package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.RoutineWorkout;
import com.trainmateback.trainmateback.model.Routine;
import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.RoutineRepository;
import com.trainmateback.trainmateback.repository.RoutineWorkoutRepository;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class RoutineController {

    @Autowired
    private RoutineRepository routineRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoutineWorkoutRepository routineWorkoutRepository;


    @PostMapping("/userRoutine")
    public ResponseEntity<String> createRoutine(@RequestBody Routine routineDTO) {
        TrainMateUser user = userRepository.findByToken(routineDTO.getToken());
        try {
            List<RoutineWorkout> workouts = new ArrayList<>();
            Routine routine = new Routine();
            for (RoutineWorkout
                    workoutDTO : routineDTO.getWorkouts()) {
                RoutineWorkout workout = new RoutineWorkout(workoutDTO.getRoutineWorkout(), workoutDTO.getSets(), workoutDTO.getReps());
                workouts.add(workout);
            }
            routine.setName(routineDTO.getName());
            routine.setWorkouts(workouts);
            routineRepository.save(routine);
            user.addRoutine(routine);
            userRepository.save(user);
            return new ResponseEntity<>("Routine created successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to create routine", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/routines")
    ResponseEntity<List<Routine>> getRoutines(@RequestHeader("Authorization") String token) {
        TrainMateUser user = userRepository.findByToken(token);
        List<Routine> routines = user.getRoutines();
        return ResponseEntity.ok(routines);
    }

    @DeleteMapping("/deleteRoutine/{id}")
    public ResponseEntity<Void> deleteRoutine(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        Routine routine = routineRepository.findById(id).orElse(null);
        TrainMateUser user = userRepository.findByToken(token);
        user.getRoutines().remove(routine);
        userRepository.save(user);
        if (routine != null) {
            routineRepository.delete(routine);
            int i = 0;
            while (i < routine.getWorkouts().size()) {
                RoutineWorkout workout = routine.getWorkouts().get(i);
                routineWorkoutRepository.delete(workout);
                routine.getWorkouts().remove(workout);
                i++;
            }

        }
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/updateRoutine/{id}")
    public ResponseEntity<?> updateRoutine(@PathVariable Long id) {
        Routine routine = routineRepository.findById(id).orElse(null);
        if (routine != null) {
            routine.updateState();
            routineRepository.save(routine);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/editRoutine")
    public ResponseEntity<?> updateRoutine(@RequestHeader String token ,@RequestBody Routine routine) {
        TrainMateUser user = userRepository.findByToken(token);
        user.updateRoutine(routine);
        userRepository.save(user);
        return ResponseEntity.ok("");
    }
}

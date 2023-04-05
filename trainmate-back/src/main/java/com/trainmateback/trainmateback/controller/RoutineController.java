package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.RoutineWorkout;
import com.trainmateback.trainmateback.model.Routine;
import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.RoutineRepository;
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


/*    @GetMapping("/routines")
    ResponseEntity<List<Routine>> getRoutines(@RequestBody String token) {
        TrainMateUser user = userRepository.findByToken(token);
        List<Routine> routines = routineRepository.findByUserAndName(user, user.getUsername());
        return ResponseEntity.ok(routines);
    }
*/
}

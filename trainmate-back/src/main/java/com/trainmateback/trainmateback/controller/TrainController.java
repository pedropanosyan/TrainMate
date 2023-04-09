package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.*;
import com.trainmateback.trainmateback.repository.TrainRepository;
import com.trainmateback.trainmateback.repository.TrainWorkoutRepository;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class TrainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TrainRepository trainRepository;

    @Autowired
    private TrainWorkoutRepository trainWorkoutRepository;

    @PostMapping("/createTrain")
    public ResponseEntity<?> createTrain(@RequestBody TrainRequest trainRequest) {
        try {
            TrainMateUser user = userRepository.findByToken(trainRequest.getToken());
            Train train = new Train(trainRequest.getName(), trainRequest.getMuscle());
            user.addTrain(train);
            userRepository.save(user);
            return ResponseEntity.ok("");
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("");
        }
    }

    @PostMapping("/addTrainWorkout")
    public ResponseEntity<?> addTrainWorkout(@RequestBody TrainWorkoutRequest trainWorkoutRequest){
        try {
            TrainMateUser user = userRepository.findByToken(trainWorkoutRequest.getToken());
            Train train = user.findTrain(trainWorkoutRequest.getTrainName());
            TrainWorkout trainWorkout = new TrainWorkout(trainWorkoutRequest.getSets(),
                                    trainWorkoutRequest.getReps(), trainWorkoutRequest.getWeight());
            if (train != null){
                trainWorkoutRepository.save(trainWorkout);
                train.addTrainWorkout(trainWorkout);
                trainRepository.save(train);
                user.addTrain(train);
                return ResponseEntity.ok("Successful");
            }
            return ResponseEntity.internalServerError().body("Train not found");

        } catch (Exception e) {
            return ResponseEntity.internalServerError().body("An error occurred");
        }
    }

     @GetMapping("/getTrains")
     ResponseEntity<List<Train>> getRoutines(@RequestHeader String token) {
         TrainMateUser user = userRepository.findByToken(token);
         List<Train> trains = user.getTrains();
         return ResponseEntity.ok(trains);
     }

    @GetMapping("/getTrainWorkouts")
    ResponseEntity<List<TrainWorkout>> getRoutines(@RequestParam Long id, @RequestHeader String token) {
        TrainMateUser user = userRepository.findByToken(token);
        Train train = user.findTrainById(id);
        return ResponseEntity.ok(train.getTrainWorkouts());
    }

    @DeleteMapping("/deleteTrain/{id}")
    public ResponseEntity<Void> deleteRoutine(@PathVariable Long id, @RequestHeader String token) {
        TrainMateUser user = userRepository.findByToken(token);
        Train train = user.findTrainById(id);
        user.getTrains().remove(train);
        userRepository.save(user);
        if (train!=null) {
            trainRepository.delete(train);
            int i = 0;
            while (i < train.getTrainWorkouts().size()) {
                TrainWorkout trainWorkout = train.getTrainWorkouts().get(i);
                trainWorkoutRepository.delete(trainWorkout);
                train.getTrainWorkouts().remove(trainWorkout);
                i++;
            }
        }
        return ResponseEntity.noContent().build();
    }


}

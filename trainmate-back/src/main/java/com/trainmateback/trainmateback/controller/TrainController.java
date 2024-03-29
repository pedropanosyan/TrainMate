package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.*;
import com.trainmateback.trainmateback.repository.TrainRepository;
import com.trainmateback.trainmateback.repository.TrainWorkoutRepository;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
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
        if (!existsTrain(trainRequest.getToken(), trainRequest.getName())) {
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
        else return ResponseEntity.internalServerError().body("");
    }

    private boolean existsTrain(String token, String name){
        try {
            TrainMateUser user = userRepository.findByToken(token);
            String temp = user.findTrain(name).getName();
            return temp.equals(name);
        }
        catch (Exception e) {return false;}
    }

    @PostMapping("/addTrainWorkout")
    public ResponseEntity<?> addTrainWorkout(@RequestBody TrainWorkoutRequest trainWorkoutRequest){
        try {
            TrainMateUser user = userRepository.findByToken(trainWorkoutRequest.getToken());
            Train train = user.findTrainById(trainWorkoutRequest.getId());
            TrainWorkout trainWorkout = new TrainWorkout(trainWorkoutRequest.getSets(),
                                    trainWorkoutRequest.getReps(), trainWorkoutRequest.getWeight(),  trainWorkoutRequest.getMuscle(), trainWorkoutRequest.getTrainName());
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

    @GetMapping("/getTrains/{muscle}")
    ResponseEntity<List<Train>> getTrain(@PathVariable String muscle, @RequestHeader String token) {
        TrainMateUser user = userRepository.findByToken(token);
        List<Train> trains = user.getTrains();
        List<Train> trainsMuscle = new ArrayList<>();
        for (Train train : trains) {
            if (train.getMuscle().equals(muscle)) {
                trainsMuscle.add(train);
            }
        }
        return ResponseEntity.ok(trainsMuscle);
    }


    @GetMapping("/getTrainWorkouts")
    ResponseEntity<List<TrainWorkout>> getRoutines( @RequestHeader String token) {
        TrainMateUser user = userRepository.findByToken(token);
        List <Train> trains=  user.getTrains();
        List <TrainWorkout> workouts = new ArrayList<>();
        for (int i=0; i<trains.size(); i++){
            workouts.addAll(trains.get(i).getTrainWorkouts());
        }
        return ResponseEntity.ok(workouts);
    }

    @DeleteMapping("/deleteTrain/{id}")
    public ResponseEntity<Void> deleteRoutine(@PathVariable Long id, @RequestHeader String token) {
        TrainMateUser user = userRepository.findByToken(token);
        Train train = trainRepository.findById(id);
        user.getTrains().remove(train);
        userRepository.save(user);
        if (train!=null) {
            trainRepository.delete(train);
            int i = 0;
            if(train.getTrainWorkouts() != null) {
                while (i < train.getTrainWorkouts().size()) {
                    TrainWorkout trainWorkout = train.getTrainWorkouts().get(i);
                    trainWorkoutRepository.delete(trainWorkout);
                    train.getTrainWorkouts().remove(trainWorkout);
                    i++;
                }
            }
        }
        return ResponseEntity.noContent().build();
    }

    @GetMapping("getTrainByName")
    Long getTrainByName(@RequestHeader String name, @RequestHeader String token){
        TrainMateUser user = userRepository.findByToken(token);
        Train train = user.findTrain(name);
        return train.getId();
    }

}

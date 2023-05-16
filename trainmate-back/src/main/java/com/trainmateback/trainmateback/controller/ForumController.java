package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.Answer;
import com.trainmateback.trainmateback.model.Question;
import com.trainmateback.trainmateback.model.TrainMateUser;
import com.trainmateback.trainmateback.repository.QuestionController;
import com.trainmateback.trainmateback.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class ForumController {

    @Autowired
    private QuestionController questionController;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/addQuestion")
    ResponseEntity<?> addQuestion(@RequestBody Question question){
        TrainMateUser user = userRepository.findByToken(question.getToken());
        Question question_aux = new Question(question.getQuestion(), user.getUsername());
        questionController.save(question_aux);
        return ResponseEntity.ok("");
    }

    @GetMapping("/getQuestions")
    List<Question> getQuestions(){
        return questionController.findAll();
    }

    @PostMapping("/addAnswer/{id}")
    ResponseEntity<?> addAnswer(@PathVariable long id, @RequestBody Answer answer){
        Answer answer1 = new Answer(answer.getAnswer());
        Question question_aux = questionController.findById(id);
        question_aux.addAnswer(answer1);
        questionController.save(question_aux);
        return ResponseEntity.ok("");
    }

    @DeleteMapping("deleteQuestion/{id}/{token}")
    ResponseEntity<?> deleteQuestion(@PathVariable long id, @PathVariable String token){
            Question question = questionController.findById(id);
            TrainMateUser user = userRepository.findByToken(token);
            if (user.getUsername() == question.getAuthor()) {
                questionController.delete(question);
                return ResponseEntity.ok("");
            }
            else return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("");

    }

}

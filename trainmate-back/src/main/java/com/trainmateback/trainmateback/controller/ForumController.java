package com.trainmateback.trainmateback.controller;

import com.trainmateback.trainmateback.model.Answer;
import com.trainmateback.trainmateback.model.Question;
import com.trainmateback.trainmateback.repository.QuestionController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class ForumController {

    @Autowired
    private QuestionController questionController;

    @PostMapping("/addQuestion")
    ResponseEntity<?> addQuestion(@RequestBody Question question){
        Question question_aux = new Question(question.getQuestion());
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

}

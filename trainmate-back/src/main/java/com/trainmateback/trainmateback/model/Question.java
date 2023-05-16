package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String question;

    @Column
    @OneToMany(cascade = CascadeType.ALL)
    private List<Answer> answers;

    @Column
    private LocalDate questionTime;

    @Column
    private String author;

    @Transient
    private String token;

    public Question(){
        this.questionTime = LocalDate.now();
    }

    public Question(String question_aux){
        this.question = question_aux;
        this.questionTime = LocalDate.now();
    }

    public Question(String question_aux, String author_aux){
        this.question = question_aux;
        this.questionTime = LocalDate.now();
        this.author = author_aux;
    }

    public String getAuthor() {
        return author;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public void addAnswer(Answer answer) {
        this.answers.add(answer);
    }

    public LocalDate getQuestionTime(){
        return this.questionTime;
    }
}

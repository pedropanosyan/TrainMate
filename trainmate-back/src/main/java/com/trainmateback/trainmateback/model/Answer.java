package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Answer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String answer;

    @Column
    private LocalDate date;

    @Column
    private String author;

    @Column
    private String token;

    public Answer(String answer){
        this.answer = answer;
        this.date = LocalDate.now();
    }

    public Answer(String answer, String author){
        this.answer = answer;
        this.date = LocalDate.now();
        this.author = author;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAuthor() {
        return author;
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

    public Answer(){}

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}

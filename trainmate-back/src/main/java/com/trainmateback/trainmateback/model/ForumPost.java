package com.trainmateback.trainmateback.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class ForumPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column String title;

    @Column String content;

    @Column
    private String token;

    public ForumPost(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getToken() {
        return token;
    }
}

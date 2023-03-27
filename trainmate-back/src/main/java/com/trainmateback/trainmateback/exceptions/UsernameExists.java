package com.trainmateback.trainmateback.exceptions;

public class UsernameExists extends RuntimeException{
    public UsernameExists(){
        super("Username already exists, try another one.");

    }

    @Override
    public String getMessage() {
        return "Username already exists, try another one.";
    }
}
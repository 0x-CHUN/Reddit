package com.chun.reddit.exceptions;

public class SubredditNotFoundException extends RuntimeException {
    public SubredditNotFoundException(String msg) {
        super(msg);
    }
}

package com.storyline.events;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class StorylineApplication {

    public static void main(String[] args) {
        SpringApplication.run(StorylineApplication.class, args);
    }
}

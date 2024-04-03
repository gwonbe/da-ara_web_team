package com.hallym.daara.gpt;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GptController {
    
    private final GptService gptService;

    public GptController(GptService gptService){
        this.gptService = gptService;
    }

    @PostMapping("/ask")
    public String ask(@RequestBody String prompt){
        return gptService.ask(prompt);
    }

}

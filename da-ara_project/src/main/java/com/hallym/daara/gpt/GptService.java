package com.hallym.daara.gpt;

import org.springframework.stereotype.Service;

@Service
public class GptService {
    
    private final OpenAIApi openAIApi;

    public GptService(){
        System.out.println("# [GptService] GptService()");
        this.openAIApi = new OpenAIApi();
    }

    public String ask(String prompt){
        System.out.println("# [GptService] ask()");
        return openAIApi.ask(prompt);
    }

}

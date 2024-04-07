package com.hallym.daara.gpt;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import org.json.simple.JSONObject;
// import org.json.JSONObject;

public class OpenAIApi {
    
    private static final String API_KEY = "";

    @SuppressWarnings("unchecked")
    public String ask(String prompt){

        System.out.println("# [OpenAIApi] ask()");

        String responseBody = "";
        String formattedPrompt = String.format("다음 질문에 대답해주세요. 또한 답변은 한국어로 해주세요 : %s", prompt);
        
        JSONObject jsonBody = new JSONObject();
        jsonBody.put("prompt", formattedPrompt);
        jsonBody.put("max_tokens", 50);
        jsonBody.put("n", 1);
        jsonBody.put("temperature", 0.7);

        try{
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.openai.com/v1/engines/code-cushman-001/completions"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer " + API_KEY)
                .POST(HttpRequest.BodyPublishers.ofString(jsonBody.toString()))
                .build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            responseBody = extractAnswer(response.body());
        }catch(Exception e){
            e.printStackTrace();
        }

        return responseBody;

    }

    private String extractAnswer(String responseJson){

        System.out.println("# [OpenAIApi] extractAnswer()");

        JSONObject jsonObject = new JSONObject();

        jsonObject = (JSONObject) jsonObject.get("choices");

        if(jsonObject != null){
            return (String) jsonObject.get("choices");
        }else{
            System.err.println("Error in API response : " + responseJson);
            return "API 호출 중 오류가 발생했습니다.";
        }

        /*
        if(jsonObject.has("choices")){
            return jsonObject.getJSONArray("choices")
                .getJSONObject(0)
                .getString("text")
                .trim();
        }else{
            System.err.println("Error in API response : " + responseJson);
            return "API 호출 중 오류가 발생했습니다.";
        }
         */

    }

}
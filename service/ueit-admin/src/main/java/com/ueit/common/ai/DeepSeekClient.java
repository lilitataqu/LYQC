package com.ueit.common.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.ueit.config.DeepSeekConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.*;

@Component
public class DeepSeekClient {

    private static final Logger log = LoggerFactory.getLogger(DeepSeekClient.class);

    private final DeepSeekConfig config;
    private final RestTemplate restTemplate;
    private final ObjectMapper objectMapper;
    private final RagService ragService;

    public DeepSeekClient(DeepSeekConfig config, RagService ragService) {
        this.config = config;
        this.restTemplate = new RestTemplate();
        this.objectMapper = new ObjectMapper();
        this.ragService = ragService;
    }

    /**
     * 简单对话
     */
    public String chat(String userMessage) {
        try {
            log.info("DeepSeekClient 收到消息: [{}], 长度: {}", userMessage, userMessage.length());
            
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("Authorization", "Bearer " + config.getApiKey());

            // 使用 Jackson 构建 JSON
            ObjectNode requestBody = objectMapper.createObjectNode();
            requestBody.put("model", config.getModel());
            requestBody.put("temperature", config.getTemperature());

            ArrayNode messages = requestBody.putArray("messages");
            ObjectNode messageNode = messages.addObject();
            messageNode.put("role", "user");
            messageNode.put("content", userMessage);

            String jsonBody = requestBody.toString();
            log.info("发送JSON: {}", jsonBody);

            HttpEntity<String> entity = new HttpEntity<>(jsonBody, headers);
            String url = config.getApiUrl() + "/v1/chat/completions";
            log.info("请求URL: {}", url);
            
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            log.info("DeepSeek响应: {}", response.getBody());

            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("调用异常", e);
            return "调用异常：" + e.getMessage();
        }
    }

    /**
     * 带知识库增强的对话
     */
    public String chatWithKnowledge(String userMessage) {
        try {
            // 1. 检索相关知识
            List<String> knowledge = ragService.retrieve(userMessage, 3);
            log.info("检索到 {} 条知识", knowledge.size());
            
            // 2. 构建增强后的提示词
            String enhancedPrompt = buildEnhancedPrompt(userMessage, knowledge);
            log.info("增强提示词长度: {}", enhancedPrompt.length());
            
            // 3. 调用 DeepSeek
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("Authorization", "Bearer " + config.getApiKey());

            ObjectNode requestBody = objectMapper.createObjectNode();
            requestBody.put("model", config.getModel());
            requestBody.put("temperature", config.getTemperature());

            ArrayNode messages = requestBody.putArray("messages");
            ObjectNode messageNode = messages.addObject();
            messageNode.put("role", "user");
            messageNode.put("content", enhancedPrompt);

            String jsonBody = requestBody.toString();
            log.info("增强模式发送JSON长度: {}", jsonBody.length());

            HttpEntity<String> entity = new HttpEntity<>(jsonBody, headers);
            String url = config.getApiUrl() + "/v1/chat/completions";
            ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);
            log.info("DeepSeek增强响应: {}", response.getBody());

            return parseResponse(response.getBody());
        } catch (Exception e) {
            log.error("增强对话异常", e);
            return "调用异常：" + e.getMessage();
        }
    }

    /**
     * 构建增强提示词
     */
    private String buildEnhancedPrompt(String userMessage, List<String> knowledge) {
        StringBuilder prompt = new StringBuilder();
        
        if (knowledge != null && !knowledge.isEmpty()) {
            prompt.append("【运动医学知识参考】\n");
            for (int i = 0; i < knowledge.size(); i++) {
                prompt.append("[").append(i + 1).append("] ").append(knowledge.get(i)).append("\n\n");
            }
            prompt.append("【用户问题】\n");
        }
        
        prompt.append(userMessage);
        prompt.append("\n\n请根据以上运动医学知识，结合用户问题给出专业的运动建议。");
        
        return prompt.toString();
    }

    /**
     * 解析响应
     */
    private String parseResponse(String responseBody) {
        try {
            JsonNode root = objectMapper.readTree(responseBody);
            JsonNode choices = root.path("choices");
            if (choices.isArray() && choices.size() > 0) {
                JsonNode message = choices.get(0).path("message");
                return message.path("content").asText();
            }
            return "解析失败：无法获取回复内容";
        } catch (Exception e) {
            return "解析异常：" + e.getMessage();
        }
    }
}

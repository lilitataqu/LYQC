package com.ueit.web.ai;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ueit.common.annotation.Anonymous;
import com.ueit.common.ai.DeepSeekClient;
import com.ueit.common.core.domain.AjaxResult;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;

@Anonymous
@RestController
@RequestMapping("/ai")
public class AiController {

    private static final Logger log = LoggerFactory.getLogger(AiController.class);

    @Autowired
    private DeepSeekClient deepSeekClient;

    private final ObjectMapper objectMapper = new ObjectMapper();

    /**
     * 简单对话接口 - 强制UTF-8读取
     */
    @PostMapping("/chat")
    public AjaxResult chat(HttpServletRequest request) {
        try {
            // 强制用UTF-8读取请求体 (JDK 1.8兼容写法)
            ServletInputStream inputStream = request.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
            StringBuilder bodyBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                bodyBuilder.append(line);
            }
            String body = bodyBuilder.toString();
            
            log.info("原始请求体: {}", body);
            
            // 解析JSON
            JsonNode jsonNode = objectMapper.readTree(body);
            String message = jsonNode.get("message").asText();
            
            log.info("收到消息: [{}], 长度: {}", message, message != null ? message.length() : 0);
            
            if (message == null || message.trim().isEmpty()) {
                return AjaxResult.error("消息不能为空");
            }

            String reply = deepSeekClient.chat(message);
            return AjaxResult.success(reply);
        } catch (IOException e) {
            log.error("读取请求失败", e);
            return AjaxResult.error("请求处理失败");
        }
    }

    /**
     * 知识增强对话接口 - 强制UTF-8读取
     */
    @PostMapping("/chat/enhanced")
    public AjaxResult chatEnhanced(HttpServletRequest request) {
        try {
            // 强制用UTF-8读取请求体 (JDK 1.8兼容写法)
            ServletInputStream inputStream = request.getInputStream();
            BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8));
            StringBuilder bodyBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                bodyBuilder.append(line);
            }
            String body = bodyBuilder.toString();
            
            log.info("原始请求体: {}", body);
            
            // 解析JSON
            JsonNode jsonNode = objectMapper.readTree(body);
            String message = jsonNode.get("message").asText();
            
            log.info("收到增强消息: [{}], 长度: {}", message, message != null ? message.length() : 0);
            
            if (message == null || message.trim().isEmpty()) {
                return AjaxResult.error("消息不能为空");
            }

            String reply = deepSeekClient.chatWithKnowledge(message);
            return AjaxResult.success(reply);
        } catch (IOException e) {
            log.error("读取请求失败", e);
            return AjaxResult.error("请求处理失败");
        }
    }
}

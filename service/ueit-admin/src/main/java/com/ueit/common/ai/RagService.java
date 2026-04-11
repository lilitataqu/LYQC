package com.ueit.common.ai;

import com.ueit.common.mapper.SportKnowledgeMapper;
import com.ueit.common.ai.SportKnowledge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.commons.lang3.StringUtils;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RagService {

    // 停用词列表
    private static final Set<String> STOP_WORDS = new HashSet<>(Arrays.asList(
            "的", "了", "是", "在", "和", "与", "或", "等", "这", "那", "我", "你", "他",
            "她", "它", "有", "也", "都", "要", "会", "可以", "能", "对", "就", "才",
            "说", "很", "被", "把", "给", "让", "从", "到", "为", "以", "及", "之"
    ));

    @Autowired
    private SportKnowledgeMapper sportKnowledgeMapper;

    /**
     * 检索相关知识
     * @param query 用户问题
     * @param topK 返回前K条
     * @return 相关的知识内容列表
     */
    public List<String> retrieve(String query, int topK) {
        // 1. 提取关键词
        List<String> keywords = extractKeywords(query);
        
        if (keywords.isEmpty()) {
            return Collections.emptyList();
        }
        
        // 2. 从数据库检索相关知识
        List<SportKnowledge> results = sportKnowledgeMapper.selectByKeywords(keywords, topK);
        
        // 3. 排序并返回内容
        return results.stream()
                .map(SportKnowledge::getContent)
                .collect(Collectors.toList());
    }

    /**
     * 检索相关知识（带分类筛选）
     */
    public List<String> retrieveByCategory(String query, String category, int topK) {
        List<String> keywords = extractKeywords(query);
        
        if (keywords.isEmpty()) {
            return Collections.emptyList();
        }
        
        List<SportKnowledge> results = sportKnowledgeMapper.selectByCategoryAndKeywords(
                category, keywords, topK);
        
        return results.stream()
                .map(SportKnowledge::getContent)
                .collect(Collectors.toList());
    }

    /**
     * 提取关键词（简单分词）
     */
    private List<String> extractKeywords(String query) {
        if (StringUtils.isBlank(query)) {
            return Collections.emptyList();
        }
        
        // 简单分词：按标点和空格分割
        String[] words = query.split("[\\s,，。、！？；：（）《》\"\"''（）]");
        
        return Arrays.stream(words)
                .filter(w -> w.length() >= 2)  // 至少2个字
                .filter(w -> !STOP_WORDS.contains(w))  // 去掉停用词
                .distinct()  // 去重
                .collect(Collectors.toList());
    }
}

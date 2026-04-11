package com.ueit.common.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.ueit.common.ai.SportKnowledge;
import java.util.List;

@Mapper
public interface SportKnowledgeMapper {

    /**
     * 根据关键词检索知识
     */
    List<SportKnowledge> selectByKeywords(@Param("keywords") List<String> keywords, @Param("limit") int limit);

    /**
     * 根据分类和关键词检索
     */
    List<SportKnowledge> selectByCategoryAndKeywords(@Param("category") String category, 
                                                     @Param("keywords") List<String> keywords, 
                                                     @Param("limit") int limit);
}

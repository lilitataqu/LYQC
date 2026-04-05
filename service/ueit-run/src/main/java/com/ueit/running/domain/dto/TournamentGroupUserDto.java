package com.ueit.running.domain.dto;

import com.ueit.running.domain.TournamentGroupUser;
import lombok.Data;

/**
 * @Author: douwq
 * @Description:
 * @Date:Create：in 2022/12/7 18:07
 */
@Data
public class TournamentGroupUserDto extends TournamentGroupUser {

    private Long startRunTime;

    private Long endRunTime;
}

package com.cclinux.projects.meetpet.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meetpet.model.UserModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository("MeetPetUserMapper")
@Mapper
public interface UserMapper extends ProjectBaseMapper<UserModel> {
}

package com.cclinux.projects.meetpet.mapper;

import com.cclinux.framework.core.mapper.ProjectBaseMapper;
import com.cclinux.projects.meetpet.model.FavModel;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;


@Repository("MeetPetFavMapper")
@Mapper
public interface FavMapper extends ProjectBaseMapper<FavModel> {
}

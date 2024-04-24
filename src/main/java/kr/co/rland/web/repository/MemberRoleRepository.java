package kr.co.rland.web.repository;

import kr.co.rland.web.entity.MemberRole;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberRoleRepository {
    List<MemberRole> findAllByMemberId(long id);
}

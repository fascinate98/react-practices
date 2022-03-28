package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TasklistVo;

@Repository
public class TasklistRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<TasklistVo> findAll(String keyword) {
		return sqlSession.selectList("tasklist.findAll", keyword);
	}
}

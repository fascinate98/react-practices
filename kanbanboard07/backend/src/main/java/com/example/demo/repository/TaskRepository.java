package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.TaskVo;

@Repository
public class TaskRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<TaskVo> findByCardNo(long no) {
		return sqlSession.selectList("task.findByCardNo", no);
	}

	public Boolean deleteByNo(Long no) {
		return sqlSession.delete("task.deleteByno", no) == 1;	
	}

	public Boolean insert(TaskVo vo) {
		return sqlSession.insert("task.insert", vo) == 1;	
	}

	public Boolean update(TaskVo vo) {
		return sqlSession.update("task.update", vo) == 1;	
		
	}

}

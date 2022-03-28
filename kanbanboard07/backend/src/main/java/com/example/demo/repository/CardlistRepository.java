package com.example.demo.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.CardlistVo;

@Repository
public class CardlistRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<CardlistVo> findAll(String keyword) {
		return sqlSession.selectList("cardlist.findAll", keyword);
	}
}

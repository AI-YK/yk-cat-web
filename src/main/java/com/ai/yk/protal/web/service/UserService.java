package com.ai.yk.protal.web.service;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.ai.yk.protal.web.content.RequestHead;
import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.getdatasourcelist.GetDataSourceListMessage;
import com.ai.yk.protal.web.content.user.UserRPMessage;
import com.ai.yk.protal.web.service.search.SearchService;
import com.alibaba.fastjson.JSON;

/**
 * Created by liutong on 16/11/17.
 */
@Service
public class UserService {
	private static final Logger LOGGER = LoggerFactory.getLogger(SearchService.class);
	
	/**
	 * 用户登录
	 * @param head1
	 * @param rpMessage
	 * @return
	 */
	public String login(UserRPMessage req) {
		/*ResponseHead head = new ResponseHead("true","登录成功");
		UserDataList dataList = new UserDataList(99538, "15343152333", "测试7", "", 1,
				"三鹿奶粉", null, null, null, null, 
				null, null, null, null, null, "CN", 
				"86", null, "15343152333", "1112@qq.com", 8, null, null, 
				null, "", 1, 0, 1, null, null,
				null, null, 10000, 10000, 0, null, 
				null, 1, 231);
		
		List data = new ArrayList<>();
		data.add(head);
		data.add(dataList);
		String json= JSONObject.toJSONString(data);*/
		return null;
	}
	public static void main(String[] args) {
		YJRequest<UserRPMessage> req = new YJRequest<>();
		UserRPMessage message = new UserRPMessage();
		message.setUserName("admin");
		RequestHead h = new RequestHead();
		h.setVersion("v1.0");
		req.setHead(h);
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
	}
	
}

package com.ai.yk.protal.web.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.ai.yk.protal.web.content.RequestHead;
import com.ai.yk.protal.web.content.ResponseHead;
import com.ai.yk.protal.web.content.user.UserDataList;
import com.ai.yk.protal.web.content.user.UserRPMessage;
import com.alibaba.fastjson.JSONObject;

/**
 * Created by liutong on 16/11/17.
 */
@Service
public class UserService {

	public String login(ResponseHead head1, List<UserRPMessage> rpMessage) {
		
		RequestHead head = new RequestHead("true","登录成功");
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
		String json= JSONObject.toJSONString(data);
		return json;
	}

}

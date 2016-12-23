package mytopics;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mytopics.MyTopicsMessage;
import com.ai.yk.protal.web.content.mytopics.MyTopicsResponse;
import com.ai.yk.protal.web.service.mytopics.MytopicsService;
import com.alibaba.fastjson.JSON;

public class MytopicsTest {
	public static void main(String[] args) {
		YJRequest<MyTopicsMessage> req = new YJRequest<>();
		MyTopicsMessage message = new MyTopicsMessage();
		message.setCreateId(99506);
		message.setPageNo(1);
		message.setPageSize(10);
		req.setMessage(message);
		//System.out.println("参数: " + JSON.toJSONString(req));
		MytopicsService service = new MytopicsService();
		YJResponse<MyTopicsResponse> res = service.queryMyTopicsList(req);
		//System.out.println("返回: " + JSON.toJSONString(res));
	}
}

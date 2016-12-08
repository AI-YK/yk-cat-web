package event;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventDetailsMessage;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.event.EventListResponse;
import com.ai.yk.protal.web.content.event.EventVo;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
import com.alibaba.fastjson.JSON;

public class EventServiceTest {
	// 列表测试
	public static void testList() {
		EventDataService service = new EventDataService();
		YJRequest<EventListMessage> req = new YJRequest<EventListMessage>();
		EventListMessage message = new EventListMessage();
		message.setPageNo(1);
		message.setPageSize(10);
		req.setMessage(message);
		System.out.println("查询参数：\n" + JSON.toJSON(req));
		YJResponse<EventListResponse> res = service.queryEventDataList(req);
		System.out.println("查询返回：\n" + JSON.toJSONString(res));

	}

	// 详情测试
	public static void testDetail() {
		EventDataService service = new EventDataService();
		YJRequest<EventDetailsMessage> req = new YJRequest<EventDetailsMessage>();
		EventDetailsMessage message = new EventDetailsMessage();
		message.setSrcId("srcId");
		req.setMessage(message);
		System.out.println("查询参数：\n" + JSON.toJSON(req));
		YJResponse<EventVo> res = service.queryEventDataEntityForSrcId(req);
		System.out.println("查询返回：\n" + JSON.toJSONString(res));

	}

	public static void main(String[] args) {
		//EventServiceTest.testList();
		EventServiceTest.testDetail();
	}
}

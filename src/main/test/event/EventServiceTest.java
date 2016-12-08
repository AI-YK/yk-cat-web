package event;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.event.EventListMessage;
import com.ai.yk.protal.web.content.event.EventListResponse;
import com.ai.yk.protal.web.service.eventdata.EventDataService;
import com.alibaba.fastjson.JSON;

public class EventServiceTest {
	public static void main(String[] args) {
		EventDataService service = new EventDataService();
		YJRequest<EventListMessage> req = new YJRequest<EventListMessage>();
		EventListMessage message = new EventListMessage();
		message.setPageNo(1);
		message.setPageSize(10);
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<EventListResponse> res = service.queryEventDataList(req);
		System.out.println(JSON.toJSONString(res));
	}
}

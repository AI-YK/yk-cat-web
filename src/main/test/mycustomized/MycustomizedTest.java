package mycustomized;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListResponse;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedVo;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.alibaba.fastjson.JSON;

public class MycustomizedTest {
	public static void testList() {
		MycustomizedService service = new MycustomizedService();
		YJRequest<MyCustomizedListMessage> req = new YJRequest<>();
		MyCustomizedListMessage message = new MyCustomizedListMessage();
		message.setCreateId(1);
		req.setMessage(message);
		System.out.println("请求参数:" + JSON.toJSONString(req));
		YJResponse<MyCustomizedListResponse> res = service
				.queryMyCustomizedList(req);
		System.out.println(JSON.toJSONString("请求返回:" + JSON.toJSONString(res)));
	}
	public static void testDeatil() {
		MycustomizedService service = new MycustomizedService();
		YJRequest<MyCustomizedListMessage> req = new YJRequest<>();
		MyCustomizedListMessage message = new MyCustomizedListMessage();
		message.setCreateId(98875);
		req.setMessage(message);
		System.out.println("请求参数:" + JSON.toJSONString(req));
		YJResponse<MyCustomizedVo> res = service
				.queryMyCustomized(req);
		System.out.println(JSON.toJSONString("请求返回:" + JSON.toJSONString(res)));
	}

	public static void main(String[] args) {
		MycustomizedTest.testList();
		//MycustomizedTest.testDeatil();
	}

}

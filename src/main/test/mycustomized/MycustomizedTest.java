package mycustomized;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.mycustomized.MyCustomizedListMessage;
import com.ai.yk.protal.web.service.mycustomized.MycustomizedService;
import com.alibaba.fastjson.JSON;

public class MycustomizedTest {
    public static void testList(){
    	MycustomizedService service = new MycustomizedService();
    	YJRequest<MyCustomizedListMessage> req = new YJRequest<>();
    	MyCustomizedListMessage message = new MyCustomizedListMessage();
    	message.setCreateId(98875);
    	req.setMessage(message);
    	System.out.println("请求参数:"+JSON.toJSONString(req));
    	service.queryMyCustomizedList(req);
    }
	public static void main(String[] args) {
		MycustomizedTest.testList();
	}

}

package getInformationList;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListMessage;
import com.ai.yk.protal.web.content.getInformationList.GetInformationListReponse;
import com.ai.yk.protal.web.service.getInformationList.GetInformationListService;
import com.alibaba.fastjson.JSON;

public class GetInfomationListTest {
public static void main(String[] args) throws Exception {
		
		GetInformationListService service = new GetInformationListService();
		YJRequest<GetInformationListMessage> req = new YJRequest<GetInformationListMessage>();
		GetInformationListMessage message = new GetInformationListMessage();
		message.setMediaType("news");
		message.setSrcId("123412");
		req.setMessage(message);
		System.out.println(JSON.toJSON(req));
		YJResponse<GetInformationListReponse> res = service.getGetInformationList(req);
		System.out.println(JSON.toJSONString(res));
	}
}

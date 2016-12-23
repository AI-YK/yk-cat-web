package publicaffairs;


import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsResponse;
import com.ai.yk.protal.web.service.publicaffairs.PublicaffairsService;
import com.alibaba.fastjson.JSON;

public class PublicaffairsTest {
	public  static void testMediaCoverage() {
		PublicaffairsService service = new PublicaffairsService();
		YJRequest<PublicAffairsMessage> req = new YJRequest<PublicAffairsMessage>();
		PublicAffairsMessage message = new PublicAffairsMessage();
		message.setModelNo("mediaCoverage");
		req.setMessage(message);
		//System.out.println("param:"+JSON.toJSONString(req));
		YJResponse<PublicAffairsResponse> res = service
				.queryMediaCoverageList(req);
		//System.out.println("返回:"+JSON.toJSONString(res));
	}

	public static void main(String[] args) {
		PublicaffairsTest.testMediaCoverage();
	}

}

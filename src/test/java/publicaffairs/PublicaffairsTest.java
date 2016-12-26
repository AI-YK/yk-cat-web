package publicaffairs;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.YJResponse;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsMessage;
import com.ai.yk.protal.web.content.publicaffairs.PublicAffairsResponse;
import com.ai.yk.protal.web.service.publicaffairs.PublicaffairsService;
import com.alibaba.fastjson.JSON;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "classpath:context/core-context.xml" })
public class PublicaffairsTest {
	@Autowired
	PublicaffairsService service;
	@Test
	public void testMediaCoverage() {
		YJRequest<PublicAffairsMessage> req = new YJRequest<PublicAffairsMessage>();
		PublicAffairsMessage message = new PublicAffairsMessage();
		message.setModelNo("ListNCSD,Gender");
		message.setInfoId("5cf4f1c273fb6d24592ea34f42b1fd75");
		req.setMessage(message);
		System.err.println("param:" + JSON.toJSONString(req));
		YJResponse<PublicAffairsResponse> res = service
				.queryMediaCoverageList(req);
		System.err.println("返回:" + JSON.toJSONString(res));
	}

}

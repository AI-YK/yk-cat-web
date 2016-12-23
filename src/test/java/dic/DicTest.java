package dic;

import com.ai.yk.protal.web.content.YJRequest;
import com.ai.yk.protal.web.content.common.DicMessage;
import com.ai.yk.protal.web.service.common.CommonService;
import com.alibaba.fastjson.JSON;

public class DicTest {

	public static void main(String[] args) {
		YJRequest<DicMessage> req = new YJRequest<>();
		DicMessage m = new DicMessage();
		m.setLanguage("zh");
		m.setType("SJLY");
		req.setMessage(m);
		CommonService test = new CommonService();
		//System.out.println(JSON.toJSONString(test
				//.queryDicByTypeAndLanguageForNews(req)));

	}

}

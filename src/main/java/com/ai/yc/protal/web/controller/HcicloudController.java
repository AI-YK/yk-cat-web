package com.ai.yc.protal.web.controller;


import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ai.yc.protal.web.service.HcicloudService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 灵云TTS服务
 *
 * Created by liutong on 16/10/31.
 */
@Controller
@RequestMapping ( "/Hcicloud" )
public class HcicloudController {
    private static final Logger LOGGER = LoggerFactory.getLogger(HcicloudController.class);
    @Autowired
    HcicloudService hcicloudService;

    @RequestMapping(value = "/text2audio")
    public void  text2audio(String lan, String text, HttpServletRequest request,
            HttpServletResponse response) throws Exception {
        String agent = request.getHeader("User-Agent").toLowerCase();
        try {
            //写入文件
            byte[] audioByte = hcicloudService.text2audio(agent,lan,text);
            
            OutputStream os = response.getOutputStream();
            response.addHeader("Accept-Ranges", "bytes");
            response.addHeader("Content-Length", audioByte.length + "");
            response.addHeader("Content-Type", "audio/mpeg;charset=UTF-8");
            os.write(audioByte);
            os.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}

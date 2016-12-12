package com.ai.yk.protal.web.service;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ai.yk.protal.web.utils.MD5Util;

/**
 * Created by liutong on 16/11/9.
 */
@Service
public class HcicloudService {
    private static final Logger LOGGER = LoggerFactory.getLogger(HcicloudService.class);

    @Value("#{hciSetting['hcicloud.appkey']}")
    private String APPKEY;
    @Value("#{hciSetting['hcicloud.devkey']}")
    private String DEVKEY;
    @Value("#{hciSetting['hcicloud.url']}")
    private String SERVER_URL;
    private static final  byte[] WAVHEAD8K = {82, 73, 70, 70, 2, 70, 0, 0, 87, 65, 86, 69, 102, 109, 116, 32, 16, 0, 0, 0, 1, 0, 1, 0, 64, 31, 0, 0, -128, 62, 0, 0, 2, 0, 16, 0, 100, 97, 116, 97, -34, 69, 0, 0};
    @Autowired
    private CloseableHttpClient client;

    /**
     * 语音合成
     *
     * @param text 合成文本不能超过1024字节，utf-8
     * @return
     * @author mimw
     */
    public byte[] text2audio(String agent,String lan, String text) throws Exception {
        String browserName = getBrowserName(agent);
        LOGGER.info(browserName);

        String config = "";
        String audioformat="";

        if (lan.equals("zh")) {
            config += "capkey=tts.cloud.wangjing";
        } else if(lan.equals("en")) {
            config += "capkey=tts.cloud.serena";
        } else if(lan.equals("fr")) {// 法语
            config += "tts.cloud.thomas";
        } else if(lan.equals("de")) {// 德语
            config += "tts.cloud.anna";
        } else if(lan.equals("pt")) {//葡萄牙
            config += "tts.cloud.vera";
//        } else if(lan.equals("pl")) { //波兰
//            
//        } else if(lan.equals("fi")) { //芬兰
//            
        } else if(lan.equals("es")) { //西班牙
            config += "tts.cloud.diego";
        }
        
        if (browserName.equals("firefox") || browserName.equals("opera")) {
            audioformat = ",audioformat=pcm8k16bit";
        } else {
            audioformat = ",audioformat=mp3_16";
        }
        config += audioformat;

        HttpPost post = new HttpPost(SERVER_URL);
        HttpResponse ttsResponse = null;

        SimpleDateFormat dateFormater = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date=new Date();
        String dataStr = dateFormater.format(date);

        post.setHeader("x-app-key", APPKEY);
        post.setHeader("x-sdk-version", "3.6");
        post.setHeader("x-request-date", dateFormater.format(date));
        post.setHeader("x-task-config", config);
        post.setHeader("x-session-key", MD5Util.MD5(dataStr + DEVKEY ));
        post.setHeader("x-udid", "101:1234567890");

//        System.out.println(MD5Util.MD5(dataStr + DEVKEY ));

        StringEntity param =new StringEntity(text,  "UTF-8");// 构造请求数据
        post.setEntity(param);
        byte[] outByte = null;
        try {
            long httpStart = System.currentTimeMillis();
            LOGGER.info("开始httpClient,当前时间戳:{}",httpStart);
            ttsResponse = client.execute(post);
            long httpEnd = System.currentTimeMillis();
            LOGGER.info("结束httpClient,当前时间戳:{},用时:{}",httpEnd,(httpEnd-httpStart));
            HttpEntity entity = ttsResponse.getEntity();
            //写入文件
            outByte = intoFile(entity.getContent(),audioformat);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (ttsResponse != null) {
                try {
                    EntityUtils.consume(ttsResponse.getEntity());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return outByte;
    }
    /**
     * 写入文件中
     * @param inputStream
     * @param audioformat
     * @return
     */
    private byte[] intoFile(InputStream inputStream, String audioformat){
        byte[] audioByte = null;
        try {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            InputStream input = inputStream;
            byte[] buffer = new byte[1024*1024];
            int lens;
            while ((lens = input.read(buffer)) > -1 ) {
                baos.write(buffer, 0, lens);
            }
            baos.flush();

            String resStr = new String(baos.toByteArray(), "utf-8");
            String splitStr = "</ResponseInfo>";
            String[] temp = resStr.split(splitStr);
            String resXml = temp[0] + splitStr;
            LOGGER.info(resXml);

            //xml byte长度
            int offset = resXml.getBytes().length;
            InputStream is = new ByteArrayInputStream(baos.toByteArray());
            //丢掉xml内容
            is.skip(offset);

//            FileOutputStream fos = new FileOutputStream(file.getAbsolutePath());
            ByteArrayOutputStream swapStream = new ByteArrayOutputStream();
            //pcm8k16bit  写入wav头
            if (audioformat.equals("pcm8k16bit")) {
//                fos.write(WAVHEAD8K);
                swapStream.write(WAVHEAD8K);
            }
            byte[] b = new byte[1024*1024];
            int len = 0;
            while((len = is.read(b)) != -1)
            {
//                fos.write(b,0,len);
                swapStream.write(b, 0, len);
            }
            audioByte = swapStream.toByteArray();
            is.close();
//            fos.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return audioByte;
    }

    /**
     * 根据agent判断前端浏览器
     * @param agent
     * @return
     */
    private String getBrowserName(String agent) {
        if(agent.indexOf("msie 7")>0){
            return "ie7";
        }else if(agent.indexOf("msie 8")>0){
            return "ie8";
        }else if(agent.indexOf("msie 9")>0){
            return "ie9";
        }else if(agent.indexOf("msie 10")>0){
            return "ie10";
        }else if(agent.indexOf("msie")>0){
            return "ie";
        }else if(agent.indexOf("opera")>0){
            return "opera";
        }else if(agent.indexOf("firefox")>0){
            return "firefox";
        }else if(agent.indexOf("webkit")>0){
            return "webkit";
        }else if(agent.indexOf("gecko")>0 && agent.indexOf("rv:11")>0){
            return "ie11";
        }else{
            return "Others";
        }
    }
}

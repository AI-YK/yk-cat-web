package com.ai.yk.protal.web.utils.https;

import java.security.cert.CertificateException;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.security.cert.X509Certificate;

import org.apache.http.impl.client.DefaultHttpClient;

public class SSLClient  extends DefaultHttpClient {}

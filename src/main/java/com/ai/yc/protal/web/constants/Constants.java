package com.ai.yc.protal.web.constants;

public final class Constants {

	private Constants() {
	}
	/** 默认缓存命名空间 */
	public static final String DEFAULT_YC_CACHE_NAMESPACE = "com.ai.yc.protal.web.default.cache";
	/** 公共缓存命名空间*/
	public static final String DEFAULT_COMMON_CACHE_NAMESPACE = "com.ai.yc.common.default.cache";
	public static final java.lang.String SUCCESS_CODE = "000000";

	public static final String ERROR_CODE = "111111";
	public static final String DEFAULT_TENANT_ID = "yeecloud";
	// 订单文档存储
	public static final String IPAAS_ORDER_FILE_DSS = "order-file-dss";
	public static final String SELF_SOURCE = "1";

	//货币单位:人民币
	public static final String CURRENCTY_UNIT_RMB = "1";
	//货币单位:美元
	public static final String CURRENCTY_UNIT_USD = "2";

	/** 邮箱可重复发送时间 配置key */
	public static final String SEND_VERIFY_MAX_TIME_KEY = "/email_verifycode_send_maxtime";
	/** IP发送邮件次数key */
	public static final String CACHE_KEY_IP_SEND_EMAIL_NUM = "band-email-ip-send-email-num";
	/** 邮件验证码超时时间 配置key */
	public static final String VERIFY_OVERTIME_KEY = "/email_verifycode_overtime";
	/** 缓存命名空间 */
	public static final String CACHE_NAMESPACE = "com.ai.yc.user.email.cache";
	/** ip可重复发送次数保存时间 配置key */
	public static final String IP_SEND_OVERTIME_KEY = "/email_ip_send_overtime";
	/** ip可重复发送次数 配置key */
	public static final String SEND_VERIFY_IP_MAX_NO_KEY = "/email_send_ip_maxno";
	/** 修改邮箱发送手机次数key */
	public static final String CACHE_KEY_UPDATE_SEND_EMAIL_NUM = "band-email-update-send-phone-num";

	public static final class Register {
		private Register() {
		}

		/** 验证码ccs配置路径 */
		public static final String VERIFICATION_CCS_NAMESPACE = "/com/ai/opt/verification-code-config";
		/** 注册邮件中文模版 */
		public static final String REGISTER_EMAIL_ZH_CN_TEMPLATE = "email/template/yc-register_zh_cn-mail.xml";
		/** 注册邮件英文模版 */
		public static final String REGISTER_EMAIL_EN_US_TEMPLATE = "email/template/yc-register_en_us-mail.xml";
		/** 邮箱校验 */
		public static final String CHECK_TYPE_EMAIL = "email";
		/** 手机校验 */
		public static final String CHECK_TYPE_PHONE = "phone";
		/** 校验通过 */
		public static final String CHECK_TYPE_SUCCESS = "1";
		/** 注册国家缓存key */
		public static final String REGISTER_COUNTRY_LIST_KEY = "register_country_list_key";
		/** 注册国家缓存超时时间 */
		public static final int REGISTER_COUNTRY_LIST_KEY_OVERTIME = 5 * 60;

	}

	public static final class PictureVerify {
		private PictureVerify() {
		}

		/** 图片验证码超时时间key */
		public static final String VERIFY_OVERTIME_KEY = "picture_verifycode_overtime";
		/** 图片验证码key */
		public static final String VERIFY_IMAGE_KEY = "picture_verifycode_key";
		/** 图片验证码长度 */
		public static final int VERIFY_SIZE = 4;
	}

	public final class PhoneVerify {
		private PhoneVerify() {
		}

		/** 手机验证码长度 */
		public static final int VERIFY_SIZE = 6;
		
		/** 手机验证码注册操作 */
		public static final String  PHONE_CODE_REGISTER_OPERATION = "1";
		/** 手机验证码修改资料操作 */
		public static final String  PHONE_CODE_UPDATE_DATA_OPERATION = "2";
		/** 注册手机验证码key */
		public static final String REGISTER_PHONE_CODE = "register_phone_code";
		/** 注册手机验证码超时时间 */
		public static final String REGISTER_PHONE_CODE_OVERTIME = "register_phone_code_overtime";
		/** 注册手机验证码当前发送次数key */
		public static final String REGISTER_PHONE_CODE_COUNT = "register_phone_code_count";
		/** 注册手机验证码最多次数key */
		public static final String REGISTER_PHONE_CODE_MAX_COUNT = "register_phone_code_max_count";
		/** 注册手机验证码最大次数超时时间key */
		public static final String REGISTER_PHONE_CODE_MAX_COUNT_OVERTIME = "register_phone_code_max_count_overtime";

		/** 资料修改手机验证码key */
		public static final String UPDATE_DATA_PHONE_CODE = "update_data_phone_code";
		/** 资料修改手机验证码超时时间 */
		public static final String UPDATE_DATA_PHONE_CODE_OVERTIME = "update_data_phone_code_overtime";
		/** 资料修改手机验证码当前发送次数key */
		public static final String UPDATE_DATA_PHONE_CODE_COUNT = "update_data_phone_code_count";
		/** 资料修改手机验证码最多次数key */
		public static final String UPDATE_DATA_PHONE_CODE_MAX_COUNT = "update_data_phone_code_max_count";
		/** 资料修改手机验证码最大次数超时时间key */
		public static final String UPDATE_DATA_PHONE_CODE_MAX_COUNT_OVERTIME = "update_data_phone_code_max_count_overtime";
		/** 手机注册验证码UID后缀 */
		public static final String  PHONE_CODE_REGISTER_UID = "_uid";
	}

	public final class UcenterOperation {
		private UcenterOperation() {
		}

		/** 手机激活码 */
		public static final String OPERATION_TYPE_PHONE_ACTIVATE = "1";
		/** 手机验证码 */
		public static final String OPERATION_TYPE_PHONE_VERIFY = "2";
		/** 手机动态密码 */
		public static final String OPERATION_TYPE_PHONE_DYNAMIC = "3";
		/** 邮箱激活码 */
		public static final String OPERATION_TYPE_EMAIL_ACTIVATE = "4";
		/** 邮箱验证码 */
		public static final String OPERATION_TYPE_EMAIL_VERIFY = "5";
		/** 密码操作验证码 */
		public static final String OPERATION_TYPE_EMAIL_PASSWORD_DYNAMIC = "6";
		/**修改密码方式 1：旧密码 */
        public static final String OPERATION_TYPE_UPDATE_PWD_OLDPSD = "1";
        /**修改密码方式 2：验证码*/
        public static final String  OPERATION_TYPE_UPDATE_PWD_CODE = "2";
	}
	
	public static final class UUID{
        private UUID(){}
        /*** 失效时间*/
        public static final int OVERTIME = 300;
        /*** 失效时间*/
        public static final String KEY_NAME = "k";
    }
	public static final class URLConstant {
        private URLConstant() {
        }

        public static final String BAAS_PT_INDEX_URL_KEY = "/baas_pt_index_url";
        public static final String INDEX_URL_KEY = "/slp_mall_web_index_url";
    }
	public final class EmailVerify {
		private EmailVerify() {
		}
		/** 邮箱验证码key */
		public static final String EMAIL_VERIFICATION_CODE = "email_verification_code";
		/** 邮箱验证码超时时间 */
		public static final String EMAIL_VERIFICATION_OVER_TIME = "email_verification_code_over_time";
	}
	public final class Order {
		private Order() {
		}
		/** 待支付 */
		public static final String ORDER_STATUS_UNPAID = "11";
		/** 翻译中*/
		public static final String ORDER_STATUS_TRANSLATE = "23";
		/** 待确认*/
		public static final String ORDER_STATUS_UNCONFIRM = "50";
		/** 待评价*/
		public static final String ORDER_STATUS_UNEVALUATE = "52";
		/** 已领取*/
		public static final String ORDER_STATUS_RECEIVE = "21";
	}
}

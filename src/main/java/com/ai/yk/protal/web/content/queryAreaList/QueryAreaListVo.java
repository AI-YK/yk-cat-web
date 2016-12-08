package com.ai.yk.protal.web.content.queryAreaList;

public class QueryAreaListVo {

	private String id;
	
	/**编码 			是否必填：Y**/
	private String code;
	/**数据源id		 是否必填：Y**/
	private Integer busCod;
	/**英文名称		 是否必填：Y**/
	private String nameEn;
	/**名称			 是否必填：Y**/
	private String name;
	/**所属分类（continent：大洲   country：国家   province：省份  city:城市   是否必填：Y**/
	private String classify;
	/**上级编码**/
	private String parentCode;
	/**纬度**/
	private String geoLat;
	/**经度**/
	private String geoLong;
	/**创建时间**/
	private String createTime;
	/**修改时间**/
	private String updateTime;
	/**首字母**/
	private String nameEnFirst;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public Integer getBusCod() {
		return busCod;
	}
	public void setBusCod(Integer busCod) {
		this.busCod = busCod;
	}
	public String getNameEn() {
		return nameEn;
	}
	public void setNameEn(String nameEn) {
		this.nameEn = nameEn;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getClassify() {
		return classify;
	}
	public void setClassify(String classify) {
		this.classify = classify;
	}
	public String getParentCode() {
		return parentCode;
	}
	public void setParentCode(String parentCode) {
		this.parentCode = parentCode;
	}
	public String getGeoLat() {
		return geoLat;
	}
	public void setGeoLat(String geoLat) {
		this.geoLat = geoLat;
	}
	public String getGeoLong() {
		return geoLong;
	}
	public void setGeoLong(String geoLong) {
		this.geoLong = geoLong;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}
	public String getNameEnFirst() {
		return nameEnFirst;
	}
	public void setNameEnFirst(String nameEnFirst) {
		this.nameEnFirst = nameEnFirst;
	}
	public QueryAreaListVo(String id, String code, Integer busCod, String nameEn, String name, String classify,
			String parentCode, String geoLat, String geoLong, String createTime, String updateTime,
			String nameEnFirst) {
		super();
		this.id = id;
		this.code = code;
		this.busCod = busCod;
		this.nameEn = nameEn;
		this.name = name;
		this.classify = classify;
		this.parentCode = parentCode;
		this.geoLat = geoLat;
		this.geoLong = geoLong;
		this.createTime = createTime;
		this.updateTime = updateTime;
		this.nameEnFirst = nameEnFirst;
	}
	public QueryAreaListVo() {
		super();
	}
}

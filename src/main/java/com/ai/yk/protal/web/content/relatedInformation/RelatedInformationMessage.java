package com.ai.yk.protal.web.content.relatedInformation;
public class RelatedInformationMessage{
	
	/**原标题   是否必须：Y**/
	private String srcTitle;

	public String getSrcTitle() {
		return srcTitle;
	}

	public void setSrcTitle(String srcTitle) {
		this.srcTitle = srcTitle;
	}

	public RelatedInformationMessage(String srcTitle) {
		super();
		this.srcTitle = srcTitle;
	}

	public RelatedInformationMessage() {
		super();
	}
}
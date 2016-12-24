package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;
import java.util.List;

public class ThematicAnalysisResponse implements Serializable {
	private static final long serialVersionUID = -4226661468115105135L;
	private List<ListNCSDVo> ListNCSD;
	private List<GenderVo> Gender;
	public List<ListNCSDVo> getListNCSD() {
		return ListNCSD;
	}
	public void setListNCSD(List<ListNCSDVo> listNCSD) {
		ListNCSD = listNCSD;
	}
	public List<GenderVo> getGender() {
		return Gender;
	}
	public void setGender(List<GenderVo> gender) {
		Gender = gender;
	}
	
}

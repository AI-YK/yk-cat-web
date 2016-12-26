package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;
import java.util.List;

public class ThematicAnalysisResponse implements Serializable {
	private static final long serialVersionUID = -4226661468115105135L;
	private List<ListNCSDVo> ListNCSD;
	private GenderVo Gender;
	public List<ListNCSDVo> getListNCSD() {
		return ListNCSD;
	}
	public void setListNCSD(List<ListNCSDVo> listNCSD) {
		ListNCSD = listNCSD;
	}
	public GenderVo getGender() {
		return Gender;
	}
	public void setGender(GenderVo gender) {
		Gender = gender;
	}
	
	
}

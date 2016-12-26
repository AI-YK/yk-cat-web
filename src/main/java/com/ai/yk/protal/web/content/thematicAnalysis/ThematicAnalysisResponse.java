package com.ai.yk.protal.web.content.thematicAnalysis;

import java.io.Serializable;
import java.util.List;

public class ThematicAnalysisResponse implements Serializable {
	private static final long serialVersionUID = -4226661468115105135L;
	private List<NCSDVo> ListNCSD;
	private GenderVo Gender;
	private List<NMSDVo> ListNMSD;
	private List<NSTVo> ListNST;

	public List<NCSDVo> getListNCSD() {
		return ListNCSD;
	}

	public void setListNCSD(List<NCSDVo> listNCSD) {
		ListNCSD = listNCSD;
	}

	public GenderVo getGender() {
		return Gender;
	}

	public void setGender(GenderVo gender) {
		Gender = gender;
	}

	public List<NMSDVo> getListNMSD() {
		return ListNMSD;
	}

	public void setListNMSD(List<NMSDVo> listNMSD) {
		ListNMSD = listNMSD;
	}

	public List<NSTVo> getListNST() {
		return ListNST;
	}

	public void setListNST(List<NSTVo> listNST) {
		ListNST = listNST;
	}

}

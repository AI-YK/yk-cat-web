package com.ai.yk.protal.web.content.publicaffairs;

import java.io.Serializable;
import java.util.List;

public class MediaCoverageListResponse implements Serializable {

	private static final long serialVersionUID = 4036989748748561977L;
    private List<MediaCoverageVo> mediaCoverage;
	public List<MediaCoverageVo> getMediaCoverage() {
		return mediaCoverage;
	}
	public void setMediaCoverage(List<MediaCoverageVo> mediaCoverage) {
		this.mediaCoverage = mediaCoverage;
	}
    
}

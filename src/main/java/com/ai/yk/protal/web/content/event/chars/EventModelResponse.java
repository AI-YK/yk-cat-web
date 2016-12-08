package com.ai.yk.protal.web.content.event.chars;

import java.io.Serializable;
import java.util.List;

public class EventModelResponse implements Serializable {

	private static final long serialVersionUID = 5751903476767830545L;
	private List<SpreadTrendVo> spreadTrend;
	private List<TimeTrendVo> timeTrend;

	public List<SpreadTrendVo> getSpreadTrend() {
		return spreadTrend;
	}

	public void setSpreadTrend(List<SpreadTrendVo> spreadTrend) {
		this.spreadTrend = spreadTrend;
	}

	public List<TimeTrendVo> getTimeTrend() {
		return timeTrend;
	}

	public void setTimeTrend(List<TimeTrendVo> timeTrend) {
		this.timeTrend = timeTrend;
	}
}

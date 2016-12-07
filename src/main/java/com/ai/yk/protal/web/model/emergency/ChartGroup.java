package com.ai.yk.protal.web.model.emergency;

import java.io.Serializable;

public class ChartGroup implements Serializable{
	
	private static final long serialVersionUID = 5483197492424868246L;

	private ChartLeft chartLeft;
	
	private ChartRight chartRight;

	public ChartLeft getChartLeft() {
		return chartLeft;
	}

	public void setChartLeft(ChartLeft chartLeft) {
		this.chartLeft = chartLeft;
	}

	public ChartRight getChartRight() {
		return chartRight;
	}

	public void setChartRight(ChartRight chartRight) {
		this.chartRight = chartRight;
	}
	
	
	
}

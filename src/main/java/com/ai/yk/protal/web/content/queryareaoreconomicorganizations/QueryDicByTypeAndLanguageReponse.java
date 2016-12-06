package com.ai.yk.protal.web.content.queryareaoreconomicorganizations;

import java.io.Serializable;
import java.util.List;


/**
 * 获取热门国家表出参
 * @author mengbo
 *
 */
public class QueryDicByTypeAndLanguageReponse implements Serializable{

	private static final long serialVersionUID = 5992018656321787513L;
	private List<QueryAreaOrEconomicOrganizationsResults> results;

	public List<QueryAreaOrEconomicOrganizationsResults> getResults() {
		return results;
	}

	public void setResults(List<QueryAreaOrEconomicOrganizationsResults> results) {
		this.results = results;
	}

}

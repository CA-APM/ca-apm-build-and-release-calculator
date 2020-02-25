function execute(metricData, javascriptResultSetHelper) {

  for (i = 0; i < metricData.length; i++) {

    var metric = metricData[i].agentMetric.attributeURL;
    var agent = metricData[i].agentName;
    var stringValue = metricData[i].timeslicedValue.getValueAsString();
    log.info(agent + '|' + metric + ' = ' + stringValue);
	}

  return javascriptResultSetHelper;
}

function getMetricRegex() {
	return ".*:Build and Release";
}

function getAgentRegex() {
    return ".*";
}

function runOnMOM() {
    return false;
}

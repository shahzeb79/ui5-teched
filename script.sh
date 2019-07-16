#!/bin/bash
function call_http_service(){

arr=(com.sap.iot:hyperscaler-message-parser:master com.sap.iot.action:action-modeler:master com.sap.iot.rules:rule-processor-stream:master com.sap.iot.action:action-processor:master com.sap.iot.action:action-modeler:master com.sap.iot.rules:rules-designtime-aggregator:master com.sap.iot:rule-processor-batch:master com.sap.npm:metering-hub:master com.sap.npm:route-service:master com.sap.iot.query-modeller:query-modeller-aggregator:master com.sap.npm:geolocation-ui:master:master com.sap.iot.geolocation:geolocation-parent:master com.sap.cnp.service:tenant-administration com.sap.appiot:composite-events-odata:master com.sap.appiot:service-metrics-sap:master com.sap.appiot:customdata:master com.sap.appiot:unified-notification-sap:master com.sap.appiot:initial-load-sap:master com.sap.appcore:explosion-update:master com.sap.appiot:customdata-associations:master com.sap.appiot:bpanalytics-event-sap:master com.sap.appiot:advancedlist-thing-sap:master com.sap.appcore:business-partner:master com.sap.appcore:location:master com.sap.appiot:coldstorewriter:master com.sap.ms:migration:master tm-data-mapping com.sap.appiot:config-customdata-sap:master com.sap.appiot:details-thing-sap:master com.sap.appiot:monitoring-dataingestion-sap:master com.sap.appiot:config-thing-sap:master com.sap.appiot:bigdata-monitors:master com.sap.appiot:customdata-association:master com.sap.appiot:errorwriter-dataingestion-sap:master com.sap.appiot:events-sap:master com.sap.appcore:crosstenant-package-sap:master com.sap.appcore:deployment-orchestration:master com.sap.appiot:thing-associations-sap:master com.sap.appiot:events-aggregate-sap:master com.sap.appiot:jobsubmitter-dataingestion-sap:master com.sap.appiot:cs-hierarchy-meta-sap:master com.sap.appiot:config-package-sap:master com.sap.appiot:composite-things-odata:master com.sap.appcore:authorization:master)

for val in "${arr[@]}"
do

    loc=$(curl -s -k -X GET "https://sonarci.wdf.sap.corp:8443/sonar/api/measures/component_tree?ps=100&s=qualifier%2Cname&baseComponentKey=${val}&metricKeys=ncloc%2Ccoverage&strategy=children");

    Lines_of_Code=$(echo $loc | jq -r '.baseComponent.measures[] | select(.metric == "ncloc") | .value')

    Code_Coverage=$(echo $loc | jq -r '.baseComponent.measures[] | select(.metric == "coverage") | .value')

    App_Name=$(echo ${val} | cut -d":" -f2)

    echo $val " = " $Lines_of_Code  $Code_Coverage

curl -i -XPOST "http://DEWDFGLP01692.wdf.sap.corp:8086/write?db=codemetrics&u=meteringuser&p=Metering@123" --data-binary "codemetrics,Appname=$App_Name  Lines_of_Code=$Lines_of_Code,Code_Coverage=$Code_Coverage"

done

}

call_http_service

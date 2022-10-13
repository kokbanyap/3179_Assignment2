var vg_1="GDPvsUnemploymentRate.vg.json";
var vg_2="GlobalUnemploymentRate.vg.json";
var vg_3="RegionUnemploymentRate.vg.json";
var vg_4="CovidImpactUnemployment.vg.json";
var vg_5="WorldAvgUnemploymentRate.vg.json";

vegaEmbed("#scatter_plot",vg_1).then(function(result){

}).catch(console.error);

vegaEmbed("#choropleth_map",vg_2).then(function(result){

}).catch(console.error);

vegaEmbed("#region_pie",vg_3).then(function(result){

}).catch(console.error);

vegaEmbed("#covid_bar",vg_4).then(function(result){

}).catch(console.error);


vegaEmbed("#unemploy_line",vg_5).then(function(result){

}).catch(console.error);
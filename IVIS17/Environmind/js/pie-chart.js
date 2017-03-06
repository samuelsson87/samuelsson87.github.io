var width = 140;
var height =  width;
var radius = Math.min(width, height) / 2;

var color = d3.scale.ordinal()
  .domain(["fossil", "renewable", "no data"])
  .range(["#8c8c8c", "#40bf80", "#f1f1f1"]);

var svg2 = d3.select("#pie-chart-container")
	.append('svg')
	.attr('id', 'pie-chart')
  	.attr('width', width)
  	.attr('height', height)
  	.append('g')
  	.attr('transform', 'translate(' + (width / 2) +  ',' + (height / 2) + ')');

var arc = d3.svg.arc()
  	.innerRadius(0)
  	.outerRadius(radius);

var pie = d3.layout.pie()
  .value(function(d) { return d[1]; })
  .sort(null);

var nodataset = [['no data', 99],['no data', 0]]

var path = svg2.selectAll('path')
	.data(pie(nodataset))
  	.enter()
	.append('path')
	.attr('d', arc)
	.style('stroke-width', '0px')
	.style('fill', function(d){
    return color(d.data[0]);
	})


drawPieChart = function(){
	console.log(year)
	code = name2code(landETT.properties.name);
	if(year < 1990 || year > 2012){
		path.data(pie(nodataset))
			.attr('d', arc)
			.style('fill', function(d){
    		return color(d.data[0]);
		})	

		pie.value(function(d) { return d[1]; })
	}
	else{
		path.data(pie(countries[code].renewables[year]))
			.attr('d', arc)
			.style('fill', function(d){
    		return color(d.data[0]);
		})		
		pie.value(function(d) { return d[1]; })
	}

}

















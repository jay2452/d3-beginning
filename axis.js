/*d3.axisTop();
d3.axisRight();
d3.axisBottom();
d3.axisLeft();*/

const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500;
var svgHeight = 300;

var svg = d3.select('svg')
			.attr('width', svgWidth)
			.attr('height', svgHeight);

var xScale = d3.scaleLinear()
				.domain([0, d3.max(dataset)])
				.range([0, svgWidth]);

var yScale = d3.scaleLinear()
				.domain([0, d3.max(dataset)])
				.range([svgHeight, 0]);

var xAxis = d3.axisBottom().scale(xScale);
var yAxis = d3.axisLeft().scale(yScale);

svg.append('g')
	.attr('transform', 'translate(50, 10)')
	.call(yAxis);

var xAxisTranslate = svgHeight - 20;
svg.append('g')
	.attr('transform', 'translate(50, ' + xAxisTranslate + ')')
	.call(xAxis);



const dataset = [22, 33, 44, 55, 66, 77];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
			.attr('width', svgWidth)
			.attr('height', svgHeight);

var barChart = svg.selectAll('rect')
				.data(dataset)
				.enter()
				.append('rect')
				.attr('y', d => svgHeight - d)
				.attr('height', d => d)
				.attr('width', barWidth - barPadding)
				.attr('class', 'bar')
				.attr('transform', (d, i) => {
					let translate = [barWidth * i, 0];
					return 'translate(' + translate + ')';
				});

var text = svg.selectAll('text')
				.data(dataset)
				.enter()
				.append('text')
				.text(d => d)
				.attr('y', (d, i) => svgHeight - d - 2)
				.attr('x', (d, i) => barWidth * i)
				.attr('fill', 'red');
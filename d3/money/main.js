(function(_, d3) {
var chartOptions = {
	width: 950,
	height: 350,
	barWidth: 900 / 31 - 5,
	barsSpace: 5,
	startMonth: 0,
	endMonth: 11
};

var courses = [{'date':'2014-10-31','value':12.95},{'date':'2014-10-30','value':12.95},{'date':'2014-10-29','value':12.95},{'date':'2014-10-28','value':12.95},{'date':'2014-10-27','value':12.95},{'date':'2014-10-24','value':12.95},{'date':'2014-10-23','value':12.95},{'date':'2014-10-22','value':12.95},{'date':'2014-10-21','value':12.95},{'date':'2014-10-20','value':12.95},{'date':'2014-10-17','value':12.95},{'date':'2014-10-16','value':12.95},{'date':'2014-10-15','value':12.95},{'date':'2014-10-14','value':12.95},{'date':'2014-10-13','value':12.95},{'date':'2014-10-10','value':12.95},{'date':'2014-10-09','value':12.95},{'date':'2014-10-08','value':12.95},{'date':'2014-10-07','value':12.95},{'date':'2014-10-06','value':12.95},{'date':'2014-10-03','value':12.95},{'date':'2014-10-02','value':12.95},{'date':'2014-10-01','value':12.9},{'date':'2014-09-30','value':12.9},{'date':'2014-09-29','value':12.9},{'date':'2014-09-26','value':12.9},{'date':'2014-09-25','value':12.9},{'date':'2014-09-24','value':12.9},{'date':'2014-09-23','value':13.4},{'date':'2014-09-22','value':13.4},{'date':'2014-09-19','value':13.35},{'date':'2014-09-18','value':13.3},{'date':'2014-09-17','value':12.83},{'date':'2014-09-16','value':12.83},{'date':'2014-09-15','value':12.83},{'date':'2014-09-12','value':12.83},{'date':'2014-09-11','value':12.83},{'date':'2014-09-10','value':12.8},{'date':'2014-09-09','value':12.75},{'date':'2014-09-08','value':12.7},{'date':'2014-09-05','value':12.6},{'date':'2014-09-04','value':12.5},{'date':'2014-09-03','value':12.5},{'date':'2014-09-02','value':12.5},{'date':'2014-09-01','value':12.8},{'date':'2014-08-29','value':13.3},{'date':'2014-08- 28','value':13.4},{'date':'2014-08-27','value':13.9},{'date':'2014-08- 26','value':13.5},{'date':'2014-08-22','value':13.3},{'date':'2014-08-21','value':13.2},{'date':'2014-08-20','value':13.05},{'date':'2014-08-19','value':13},{'date':'2014-08-18','value':12.95},{'date':'2014-08-15','value':12.97},{'date':'2014-08-14','value':13},{'date':'2014-08-13','value':13.13},{'date':'2014-08-12','value':12.85},{'date':'2014-08-11','value':12.63},{'date':'2014-08-08','value':12.45},{'date':'2014-08-07','value':12.37},{'date':'2014-08-06','value':12.3},{'date':'2014-08-05','value':12.33},{'date':'2014-08-04','value':12.27},{'date':'2014-08-01','value':12.23},{'date':'2014-07-31','value':12.18},{'date':'2014-07-30','value':12.07},{'date':'2014-07-29','value':11.97},{'date':'2014-07-28','value':11.85},{'date':'2014-07-25','value':11.72},{'date':'2014-07-24','value':11.67},{'date':'2014-07-23','value':11.67},{'date':'2014-07-22','value':11.65},{'date':'2014-07-21','value':11.65},{'date':'2014-07-18','value':11.7},{'date':'2014-07-17','value':11.72},{'date':'2014-07-16','value':11.7},{'date':'2014-07-15','value':11.65},{'date':'2014-07-14','value':11.65},{'date':'2014-07-11','value':11.65},{'date':'2014-07-10','value':11.7},{'date':'2014-07-09','value':11.6},{'date':'2014-07-08','value':11.72},{'date':'2014-07-07','value':11.77},{'date':'2014-07-04','value':11.77},{'date':'2014-07-03','value':11.85},{'date':'2014-07-02','value':11.83},{'date':'2014-07-01','value':11.8},{'date':'2014-06-27','value':11.87},{'date':'2014-06-26','value':11.82},{'date':'2014-06-25','value':11.83},{'date':'2014-06-24','value':11.83},{'date':'2014-06-23','value':11.85},{'date':'2014-06-20','value':11.83},{'date':'2014-06-19','value':11.93},{'date':'2014-06-18','value':11.9},{'date':'2014-06-17','value':11.85},{'date':'2014-06-16','value':11.8},{'date':'2014-06-13','value':11.65},{'date':'2014-06-12','value':11.62},{'date':'2014-06-11','value':11.63},{'date':'2014-06-10','value':11.8},{'date':'2014-06-06','value':11.83},{'date':'2014-06-05','value':11.87},{'date':'2014-06-04','value':11.9},{'date':'2014-06-03','value':11.85},{'date':'2014-06-02','value':11.8},{'date':'2014-05-30','value':11.8},{'date':'2014-05-29','value':11.83},{'date':'2014-05-28','value':11.83},{'date':'2014-05-27','value':11.85},{'date':'2014-05-26','value':11.85},{'date':'2014-05-23','value':11.9},{'date':'2014-05-22','value':11.85},{'date':'2014-05-21','value':11.9},{'date':'2014-05-20','value':11.9},{'date':'2014-05-19','value':11.83},{'date':'2014-05-16','value':11.78},{'date':'2014-05-15','value':11.7},{'date':'2014-05-14','value':11.7},{'date':'2014-05-13','value':11.6},{'date':'2014-05-12','value':11.55},{'date':'2014-05-08','value':11.65},{'date':'2014-05-07','value':11.7},{'date':'2014-05-06','value':11.55},{'date':'2014-05-05','value':11.35},{'date':'2014-04-30','value':11.35},{'date':'2014-04-29','value':11.5},{'date':'2014-04-28','value':11.35},{'date':'2014-04-25','value':11.25},{'date':'2014-04-24','value':11.3},{'date':'2014-04-23','value':11.2},{'date':'2014-04-22','value':11.15},{'date':'2014-04-18','value':10.95},{'date':'2014-04-17','value':10.8},{'date':'2014-04-16','value':11.2},{'date':'2014-04-15','value':12.1},{'date':'2014-04-14','value':12.7},{'date':'2014-04-11','value':12.8},{'date':'2014-04-10','value':11.9},{'date':'2014-04-09','value':11.55},{'date':'2014-04-08','value':11.45},{'date':'2014-04-07','value':11.35},{'date':'2014-04-04','value':11.2},{'date':'2014-04-03','value':11.15},{'date':'2014-04-02','value':11.11},{'date':'2014-04-01','value':11.1},{'date':'2014-03-31','value':10.955},{'date':'2014-03-28','value':10.9},{'date':'2014-03-27','value':10.8},{'date':'2014-03-26','value':10.7},{'date':'2014-03-25','value':10.5},{'date':'2014-03-24','value':10.45},{'date':'2014-03-21','value':10.12},{'date':'2014-03-20','value':9.92},{'date':'2014-03-19','value':9.9},{'date':'2014-03-18','value':9.8},{'date':'2014-03-17','value':9.65},{'date':'2014-03-14','value':9.5},{'date':'2014-03-13','value':9.25},{'date':'2014-03-12','value':9.15},{'date':'2014-03-11','value':9},{'date':'2014-03-07','value':8.9},{'date':'2014-03-06','value':9},{'date':'2014-03-05','value':9.15},{'date':'2014-03-04','value':9.5},{'date':'2014-03-03','value':9.6994},{'date':'2014-02-28','value':10.4},{'date':'2014-02-27','value':10.5},{'date':'2014-02-26','value':9.45},{'date':'2014-02-25','value':9.23},{'date':'2014-02-24','value':9.05},{'date':'2014-02-21','value':9.03},{'date':'2014-02-20','value':8.95},{'date':'2014-02-19','value':8.89},{'date':'2014-02-18','value':8.75},{'date':'2014-02-17','value':8.73},{'date':'2014-02-14','value':8.7},{'date':'2014-02-13','value':8.67},{'date':'2014-02-12','value':8.56},{'date':'2014-02-11','value':8.43},{'date':'2014-02-10','value':8.43},{'date':'2014-02-07','value':8.5},{'date':'2014-02-06','value':8.4},{'date':'2014-02-05','value':8.9},{'date':'2014-02-04','value':8.71},{'date':'2014-02-03','value':8.58},{'date':'2014-01-31','value':8.54},{'date':'2014-01-30','value':8.52},{'date':'2014-01-29','value':8.475},{'date':'2014-01-28','value':8.48},{'date':'2014-01-27','value':8.455},{'date':'2014-01-24','value':8.43},{'date':'2014-01-23','value':8.39},{'date':'2014-01-22','value':8.37},{'date':'2014-01-21','value':8.36},{'date':'2014-01-20','value':8.35},{'date':'2014-01-17','value':8.33},{'date':'2014-01-16','value':8.3},{'date':'2014-01-15','value':8.295},{'date':'2014-01-14','value':8.275},{'date':'2014-01-13','value':8.265},{'date':'2014-01-11','value':8.24},{'date':'2014-01-10','value':8.23},{'date':'2014-01-09','value':8.202},{'date':'2014-01-08','value':8.195},{'date':'2014-01-03','value':8.215}];

var parseData = function(courses){
	var parsedData = {};
	_.each(courses, function(c){
		var date = new Date(c.date),
			month = date.getMonth(),
			day = date.getDate();

		if (!parsedData[month]) {
			parsedData[month] = {};
		}
		parsedData[month][day] = Number(c.value);
	});
	return parsedData;
};
var decDay = function(day, month){
	day--;
	if (!day){
		day = 31;
		month--;
	}
	return [day, month];
};

var incDay = function(day, month){
	day++;
	if(day > 31){
		day = 1;
		month++;
	}
	return [day, month];
};

var getDayCourse = function(day, month){
	var m = parsedData[month];
	if (!m) { return false; }

	var course = m[day];
	if (!course){
		course = getDayCourse.apply(this, decDay(day, month));
	}
	return course;
};

var getDayCourses = function(day){
	var result = [];
	for (var i = chartOptions.startMonth; i < (chartOptions.endMonth + 1); i++){
		var course = getDayCourse(day, i);
		if (course) {
			result.push(course);
		}
	}
	return result;
};

var fillCoursesByDay = function(){
	var dayCourses = [];
	for (var i = 1; i<32; i++){
		dayCourses.push({day:i, values: getDayCourses(i)});
	}
	return dayCourses;
};

var getBounds = function(courses){
	var bounds = {
			max: {
				averageValue: courses[0].averageValue
			},
			min: {
				averageValue: courses[0].averageValue
			}
		};

	_.each(courses, function(a, i){
		if (bounds.max.averageValue < a.averageValue){
			bounds.max = a;
		}
		if (bounds.min.averageValue > a.averageValue){
			bounds.min = a;
		}
	});
	return bounds;
};

var redrawChart = function(data){
	var bounds = getBounds(data);

	var heightScale = d3.scale.linear()
						.domain([bounds.min.averageValue * 0.99, bounds.max.averageValue])
						.range([0, chartOptions.height]);

	var colorScale = d3.scale.linear()
						.domain([bounds.min.averageValue * 0.99, bounds.max.averageValue*0.9999, bounds.max.averageValue])
						.range(['red', 'green', 'limegreen']);

	var bars = canvas.selectAll('.bar')
		.data(data);

		bars.select('rect')
			.attr({
					width: chartOptions.barWidth,
					height: function(d) { return heightScale(d.averageValue);},
					x: function(d, i) { return (chartOptions.barWidth + chartOptions.barsSpace) * i;},
					y: function(d) { return chartOptions.height - heightScale(d.averageValue); },
					fill: function(d) { return colorScale(d.averageValue);}
				});

		bars.select('.value')
			.attr({
				y: function(d){return chartOptions.height - heightScale(d.averageValue) + 10;},
			})
			.text(function(d){ return d.averageValue.toFixed(2); });

		bars.select('.day').text(function(d){ return d.day; });
};

var calculateData = function(){
	var averageCoursesByDay = _.map(fillCoursesByDay(), function(c){
		var sum = _.reduce(c.values, function(sum, num){
			return sum + num;
		});
		c.averageValue = (sum / c.values.length) || 0;
		return c;
	});
	return averageCoursesByDay;
};

var parsedData = parseData(courses);

var averageCoursesByDay = calculateData();

var canvas = d3.select('.chart')
			.append('svg')
			.attr({
				width: chartOptions.width,
				height: chartOptions.height
			})
			.append('g')
			.attr('transform','translate(20,20)');

var bars = canvas.selectAll('.bar')
			.data(averageCoursesByDay)
			.enter()
			.append('g')
			.attr('class','bar');

	bars.append('rect');

	bars.append('text')
		.attr({
			class: 'value',
			x: function(d, i) { return (chartOptions.barWidth + chartOptions.barsSpace) * i + chartOptions.barWidth / 2;},
			'text-anchor': 'middle',
			'font-size': '0.6em',
			'fill': 'white'
		});

	bars.append('text')
		.attr({
			class: 'day',
			x: function(d, i) { return (chartOptions.barWidth + chartOptions.barsSpace) * i + chartOptions.barWidth / 2;},
			y: function(d){return chartOptions.height - 30;},
			'text-anchor': 'middle',
			'fill': 'white'
		});
	
redrawChart(averageCoursesByDay);

$(function(){
	$('.monthSelector').change(function(){
		var $this = $(this);
		chartOptions[$this.data('field')] = Number($this.val());
		redrawChart(calculateData());
	});
});			

})(window._, window.d3);

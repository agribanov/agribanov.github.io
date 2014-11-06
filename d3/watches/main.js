(function(d3) {

  var chartOptions = {
    height: Math.max(200, window.innerHeight),
    width: Math.max(200, window.innerWidth)
  };

  var arcOptions = {
    firstOrbitRadius: 20,
    repaintInterval: 20,
    colorRange: ['dimgray', 'snow']
  };

  var data = function(){
    var now = new Date(),
      ms = now.getMilliseconds(),
      s = now.getSeconds() * 1000 + ms,
      m = now.getMinutes() * 60000 + s,
      h = (now.getHours()<12 ? now.getHours() : now.getHours()-12) * 3600000 + m;
    return [
      {orbit: 4, value: now.getMilliseconds(), relativeValue: (ms / 1000)},
      {orbit: 3, value: now.getSeconds(), relativeValue: (s / 60000)},
      {orbit: 2, value: now.getMinutes(), relativeValue: (m / 3600000)},
      {orbit: 1, value: now.getHours(), relativeValue: (h / (3600000 * 12))}
    ];
  };

  var tick = function(){
    var arcs = canvas.selectAll('.arc')
        .data(data);

    arcs.select('path')
      .attr('d',arc)
      .attr('fill', function(d){return colorRange(d.relativeValue);});

    canvas.select('text')
        .text(timeFormat(new Date()));

    setTimeout(tick, arcOptions.repaintInterval);
  };

  var colorRange = d3.scale.linear()
          .domain([0, 1])
          .range(arcOptions.colorRange);

  var canvas = d3.select('body')
      .append('svg')
      .attr(chartOptions)
      .append('g')
      .attr('transform', 'translate(' + chartOptions.width / 2 + ',' + chartOptions.height / 2 + ')');

  var arc = d3.svg.arc()
        .startAngle(0)
        .endAngle(function(d){return d.relativeValue * 2 * Math.PI; })
        .outerRadius(function(d){ return d.orbit * arcOptions.firstOrbitRadius; })
        .innerRadius(function(d){ return (d.orbit - 1) * arcOptions.firstOrbitRadius; });

  var timeFormat = d3.time.format('%H:%M:%S');
  
  var arcs = canvas.selectAll('.arc')
        .data(data)
        .enter()
          .append('g')
          .attr('class','arc')
          .append('path');

    canvas.append('text')
        .attr('font-size', '1.5em')
        .attr('text-anchor', 'middle');

  tick();

})(window.d3);


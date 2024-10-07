import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Chart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 450)
      .attr('height', 300);
    


    const xScale = d3.scaleBand()
      .domain(data.map(d => d.device))
      .range([0, 400])
      .padding(0.3);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.consumption)])
      .range([200, 0]);


    svg.append('g')
      .attr('transform', 'translate(50, 200)')
      .call(d3.axisBottom(xScale));

    svg.append('g')
      .attr('transform', 'translate(50, 0)')
      .call(d3.axisLeft(yScale));

    // Bars
    svg.selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => xScale(d.device) + 50)
      .attr('y', d => yScale(d.consumption))
      .attr('width', xScale.bandwidth())
      .attr('height', d => 200 - yScale(d.consumption))
      .attr('fill', '#007bff');
     


 
    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => xScale(d.device) + 50 + xScale.bandwidth() / 2)
      .attr('y', d => {
        const yPos = yScale(d.consumption) - 10; 
        return yPos < 15 ? 15 : yPos; 
      })
      .attr('text-anchor', 'middle')
      .text(d => `${d.consumption} kW`)
      .attr('fill', 'black')
      .style('font-size', '12px');


    svg.append('text')
      .attr('x', 250) 
      .attr('y', 280) 
      .attr('text-anchor', 'middle') 
      .text('Electricity Consumption')
      .attr('fill', 'black')
      .style('font-size', '16px')
      .style('font-weight', 'bold');

  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default D3Chart;

import { data } from "./data";
import * as d3 from 'd3';

export const d3Component = async () => {
    const receivedData = await data();
    const container = document.getElementById('container');
    console.log(receivedData); // Should log the fetched data or null if an error occurred

    if (receivedData) {
        // Define the dimensions of the SVG
        const margin = { top: 20, right: 30, bottom: 30, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 450 - margin.top - margin.bottom;

        // Create the SVG element
        const svg = d3.select(container).append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Define the scales
        const xScale = d3.scaleBand()
            .domain(receivedData.map((d, i) => i))
            .range([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(receivedData, d => d[1])])
            .nice() // Extends the domain slightly to round values
            .range([height, 0]);

        // Create the bars
        svg.selectAll('rect')
            .data(receivedData)
            .enter()
            .append('rect')
            .attr('x', (d, i) => xScale(i))
            .attr('y', d => yScale(d[1]))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d[1]))
            .attr('fill', '#33adff')
            .append('title') // Add title for tooltip
            .text(d => {
                const date = new Date(d[0]);
                const year = date.getFullYear();
                return `${year}: ${(d[1] * 1000).toLocaleString()} Billions`;
            })

        // Add the x-axis
        svg.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale)
                .tickValues(xScale.domain().filter((d, i) => i % 20 === 0)) // Display every 20th label
                .tickFormat((d, i) => receivedData[d][0].substring(0, 4)) // Assuming the first element of each data array is the label
                .tickSize(0)
                .tickPadding(6))
            .selectAll('text')
            .attr('transform', 'rotate(-65)')
            .style('text-anchor', 'end');



        // Add the y-axis
        svg.append('g')
            .call(d3.axisLeft(yScale));
    }
};

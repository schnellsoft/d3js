import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
export class M03 {

    static m03a() {
      let data = [10, 5, 12, 15];
      let width = 300, scaleFactor = 20, barHeight = 30;
      let graph = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", barHeight * data.length);
      let bar = graph.selectAll("g") 
        .data(data)
        .enter()
        .append("g")
        .attr("transform", function(d, i) {
           return "translate(0," + i * barHeight + ")";
        });  
        bar.append("rect")
        .attr("width", function(d) {
           return d * scaleFactor;
        })
        .attr("height", barHeight - 1);
        bar.append("text")
        .attr("x", function(d) { return (d*scaleFactor); })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d; });  
        
        
    }

}
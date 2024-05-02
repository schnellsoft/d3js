import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
export class M01 {
    
    static m01a() {
        
            let vv = d3.select("div").text();
            console.log(vv);

            vv = d3.select("ul").selectAll("li")
            .data([10, 20, 30, 25, 15])
            .text((d) => d)
            .enter()
            .append("li")
            .text((d) => d) 

            d3.selectAll("li")
                .data([10, 20, 30, 25])
                .exit()
                .remove();

            console.log(vv);

            let fruits = ['Apple', 'Orange', 'Mango']

            d3.select(".d3-fruit")
                .selectAll("p")
                .data(fruits)
                .join("p") // the join method
                    .attr("class", "d3_fruit")
                    .text((d) => d)
            
        }

}
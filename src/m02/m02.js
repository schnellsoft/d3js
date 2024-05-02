import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
export class M02 {

    static m02a() {
        let t = d3.transition()
            .duration(2000);
            d3.select("body")
            .transition()
            .duration(4000)
            .style("background-color", "lightblue");
    }

}
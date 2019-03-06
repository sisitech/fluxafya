import { Component, NgZone, OnInit } from '@angular/core';

import * as shape from 'd3-shape';
import * as d3 from 'd3';
import { colorSets } from '@swimlane/ngx-charts/release/utils/color-sets';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {
  single,
  multi,
  bubble,
  generateData,
  generateGraph,
  colors
} from '../core';

const monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
const weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  private chart: am4charts.XYChart;
  single: any[];
  multi: any[];
  dateData: any[];
  dateDataWithRange: any[];
  graph: { links: any[]; nodes: any[] };
  range = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  tooltipDisabled = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = 0;
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;

  // line interpolation
  curve = shape.curveBasis;

  // pie
  showLabels = true;
  explodeSlices = true;
  doughnut = false;
  arcWidth = 0.25;

  colorScheme = {
    domain: colors
  };

  schemeType = 'ordinal';
  rangeFillOpacity = 0.15;

  // line, area
  autoScale = true;
  timeline = false;

  constructor(private zone:NgZone) {
    Object.assign(this, {
      single,
      graph: generateGraph(50),
      multi
    });

    this.dateData = generateData(2, false);
    this.dateDataWithRange = generateData(2, true);
  }


  ngOnInit(){
   
  }

  ngAfterViewInit(){
    this.zone.runOutsideAngular(()=>{
      // Create chart
      let chart = am4core.create(document.getElementById("chartdiv"), am4charts.XYChart);
      chart.paddingRight = 20;
      
      chart.data = this.generateChartData();
      
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.baseInterval = {
        "timeUnit": "minute",
        "count": 1
      };
      dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
      
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.title.text = "Plays";
      
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "visits";
      series.tooltipText = "Views: [bold]{valueY}[/]";
      series.fillOpacity = 0.3;
      
      
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.lineY.opacity = 0;

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;
      
      
      chart.events.on("datavalidated", function () {
       dateAxis.zoom({start:0.8, end:1});
      });
    })    
    
  }

  ngOnDestroy(){
    this.zone.runOutsideAngular(()=>{
      if(this.chart){
        this.chart.dispose()
      }
    })
  }
  

    generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);
    
        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
            var newDate = new Date(firstDate);
            // each time we add one minute
            newDate.setMinutes(newDate.getMinutes() + i);
            // some random number
            visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
            // add data item to the array
            chartData.push({
                date: newDate,
                visits: visits
            });
        }
         return chartData;
  }



  get dateDataWithOrWithoutRange() {
    if (this.range) {
      return this.dateDataWithRange;
    } else {
      return this.dateData;
    }
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }
}

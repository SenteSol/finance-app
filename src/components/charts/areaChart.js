const currentDate = new Date();
const areaChart = revenue => ({
  chart: {
    type: "area",
    height: "320px"
  },
  credits: {
    enabled: false
  },
  accessibility: {
    description: ""
  },
  title: {
    text: "Revenue per month from loans disbursed"
  },
  rangeSelector: {
    selected: 1
  },

  subtitle: "",
  xAxis: {
    type: "datetime"
  },
  yAxis: {
    title: {
      text: `Revenue for the past 12 months`
    },
    labels: {
      formatter() {
        return `${this.value / 1000}k`;
      }
    }
  },
  tooltip: {
    pointFormat: "{series.name} earned revenue of <b>${point.y:.0f}</b><br/>"
  },
  plotOptions: {
    series: {
      pointStart: Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth() - 12, currentDate.getUTCDate()),
      pointInterval: 24 * 3600 * 1000 * 30,
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },
  series: [
    {
      name: "Months",
      color: {
        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
        stops: [
          [0, "#0b0baa"],
          [1, "#00d4ff"]
        ]
      },
      data: revenue
    }
  ]
});

export default areaChart;

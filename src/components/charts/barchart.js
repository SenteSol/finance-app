const barchart = seriesData => ({
  chart: {
    type: "column",
    height: "320px"
  },
  credits: {
    enabled: false
  },
  title: {
    text: "Highly valued customers"
  },
  subtitle: {
    text: ""
  },
  accessibility: {
    announceNewData: {
      enabled: true
    }
  },
  xAxis: {
    type: "category"
  },
  yAxis: {
    title: {
      text: "Revenue earned from the five largest clients"
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: "${point.y:.1f}"
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>${point.y:.2f}</b> <br/>'
  },

  series: [
    {
      name: "Revenue earned",
      colorByPoint: true,
      data: seriesData
    }
  ]
});

export default barchart;

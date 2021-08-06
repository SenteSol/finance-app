import dayjs from "dayjs";
const donut = currency => ({
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: 0,
    plotShadow: false,
    height: "320px"
  },
  credits: {
    enabled: false
  },
  title: {
    text: `Currency <br>shares<br>${dayjs().year()}`,
    align: "center",
    verticalAlign: "middle",
    y: 60
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
  },
  accessibility: {
    point: {
      valueSuffix: "%"
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: true,
        distance: -50,
        style: {
          fontWeight: "bold",
          color: "white"
        }
      },
      startAngle: -90,
      endAngle: 90,
      center: ["50%", "75%"],
      size: "110%"
    }
  },
  series: [
    {
      type: "pie",
      name: "Browser share",
      innerSize: "50%",
      data: currency
    }
  ]
});

export default donut;

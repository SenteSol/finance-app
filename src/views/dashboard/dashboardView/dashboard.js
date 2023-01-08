import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useStyles } from "./dashboardStyles";
import donut from "../../../components/charts/donut";
import barchart from "../../../components/charts/barchart";
import areaChart from "../../../components/charts/areaChart";

const Dashboard = ({ clients, currency, monthlyRevenue }) => {
  const [clientData, setClientData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    refactoredClientData(clients);
  }, [clients]);

  const refactoredClientData = data => {
    const clientDetails = [];
    Object.keys(data).forEach(key => {
      clientDetails.push({
        name: key,
        y: clients[key]
      });
    });
    setClientData(clientDetails);
  };

  return (
    <>
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <Box border={1} className={classes.section}>
            <HighchartsReact highcharts={Highcharts} options={areaChart(monthlyRevenue)} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={1} className={classes.section}>
            <HighchartsReact highcharts={Highcharts} options={barchart(clientData)} className={classes.charts} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box border={1} className={classes.section}>
            <HighchartsReact highcharts={Highcharts} options={donut(currency)} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

import React from "react";
import { useStyles } from "./MainPageStyle";
import LinearChart from "../../../../components/Charts/LinearChart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CalendarRTC from "../../../../components/Calendar/CalendarRCT";
import PieChart from "../../../../components/Charts/PieChart";

function MainPage() {
  const css = useStyles();
  return (
    <div className={css.MainPage}>
      {/***************************** CHARTS **************************/}
      <Grid container spacing={3}>
        <ChartCont>
          <h3 className="chart-title">
            <span className="primary">20</span> Rendez-vous
          </h3>
          <LinearChart />
        </ChartCont>

        <ChartCont>
          <h3 className="chart-title">
            <span className="primary">+21</span> Nouvelles prescriptions
          </h3>
          <LinearChart />
        </ChartCont>

        <ChartCont>
          <h3 className="chart-title">
            <span className="secondary">124</span> Fichiers partagés
          </h3>
          <LinearChart color="#FFCD54" />
        </ChartCont>

        {/***************************** Calendar with tab **************************/}
        <Grid item xs={12} md={8} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          ></Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={4}>
          <Grid container spacing={3}>
            <CalendarCont>
              <CalendarRTC />
            </CalendarCont>
            <PieChartCont>
              <PieChart />
            </PieChartCont>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;

const ChartCont = (props) => {
  return (
    <Grid item xs={12} md={8} lg={4}>
      <Paper
        sx={{ p: 2, display: "flex", flexDirection: "column", height: 260 }}
      >
        {props.children}
      </Paper>
    </Grid>
  );
};

const CalendarCont = (props) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "420px",
          "& *": {
            overflow: "hidden",
          },
        }}
      >
        {props.children}
      </Paper>
    </Grid>
  );
};

const PieChartCont = (props) => {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& *": {
            overflow: "hidden",
          },
        }}
      >
        {props.children}
      </Paper>
    </Grid>
  );
};

import React from "react";
import styles from "./Charts.module.css";
import { getLineChart, getBarChart } from '../utility';

const Charts = ({data: { deaths, confirmed, recovered }, dailyData, country, monthData : {data}}) => {
  const lineChart = dailyData.length ? getLineChart(dailyData) : null;
  const barChart = confirmed ? getBarChart(deaths, confirmed, recovered, country) : null;
//   const lineChartForMonth = data ? getLineChart(data) : null;
    




    return(
        <div className={styles.container} style={{ height: '200px'}} >
            {/* {data && data.length > 0 && lineChartForMonth} */}
            {country ? barChart : lineChart} 
        </div>
    )
}

export default Charts;
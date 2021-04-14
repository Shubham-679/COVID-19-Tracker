import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { getNumberFormat } from '../utility';
import moment from 'moment';

const Cards = ({ data: { deaths, confirmed, recovered, lastUpdate }, country }) => {
  
  if (!confirmed) {
    return "Loading...";
  }

  const active = confirmed["value"] - recovered["value"] - deaths["value"];
  
  let cardDetails = [
    {
      style: styles.infected,
      text: "Infected",
      formattedValue: getNumberFormat(confirmed.value),
      value: confirmed.value,
      bottomText: "Number of infect cases of COVID-19",
    },
    {
      style: styles.recovered,
      text: "Recovered",
      formattedValue: getNumberFormat(recovered.value),
      value: recovered.value,
      bottomText: "Number of recoveries from COVID-19",
    },
    {
      style: styles.deaths,
      text: "Deaths",
      formattedValue: getNumberFormat(deaths.value),
      value: deaths.value,
      bottomText: "Number of deaths caused by COVID-19",
    },
    {
      style: styles.active,
      text: "Active",
      formattedValue: getNumberFormat(active),
      value: active,
      bottomText: "Number of active cases of COVID-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardDetails.map((detail, index) => (
          <Grid item component={Card} xs={12} md={2} className={cx(styles.card, detail.style)} key={index} style={{ margin: "0px 23.675px", padding: "12px" }}>
            <CardContent>
              <Typography color="textPrimary" variant="h5" gutterBottom><b>{detail.text}</b></Typography>
              <Typography variant="h4">{detail.formattedValue}</Typography>
              <Typography color="textSecondary" variant="body2" > <CountUp start={0} end={detail.value} duration={2} separator="," /> </Typography>
              <Typography color="textPrimary"> Last Update : </Typography>
              <Typography color="textSecondary" variant="body2"> {moment(lastUpdate).calendar()} </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
              <Typography color="textPrimary"> {country} </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>

  )
}

export default Cards;
import React from "react";
import { Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import { getNumberFormat, getCards } from '../utility';

const Cards = ({ data: { deaths, confirmed, recovered, lastUpdate }, country, monthData: { data, monthlyTotalConfirmed, monthlyTotalDeaths } }) => {
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

  let cardDetailsForMonths = [
    {
      style: styles.infected,
      text: "Infected",
      formattedValue: getNumberFormat(monthlyTotalConfirmed),
      value: monthlyTotalConfirmed,
      bottomText: "Number of infect cases of COVID-19",
    },
    {
      style: styles.deaths,
      text: "Deaths",
      formattedValue: getNumberFormat(monthlyTotalDeaths),
      value: monthlyTotalDeaths,
      bottomText: "Number of deaths caused by COVID-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {/* {cardDetails.map((detail, index) => getCards(detail, index, lastUpdate, country))} */}
        {data && data.length > 0 ? cardDetailsForMonths.map((detail, index) => getCards(detail, index, lastUpdate, country)) :
        cardDetails.map((detail, index) => getCards(detail, index, lastUpdate, country))
        }
      </Grid>
    </div>

  )
}

export default Cards;
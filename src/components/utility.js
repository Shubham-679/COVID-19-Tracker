import numeral from 'numeral';
import moment from 'moment';
import { Line, Bar } from "react-chartjs-2";

export const getNumberFormat = (value) => {
    return numeral(value).format(`0,0.[00]a`).toUpperCase();
}

export const getLineChart = (dailyData) => {
    return (
        <Line
            data={{
                labels: dailyData.map(({ date }) => moment(date).format('LL')),
                datasets: [
                    {
                        data: dailyData.map(({ confirmed }) => confirmed.total),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths.total),
                        label: "Deaths",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill: true,
                    },
                ],
            }}
        />
    )
}

export const getBarChart = (deaths, confirmed, recovered, country) => {
    return (
        <Bar
            width={100}
            height={50}
            data={{
                labels: ["Infected", "Recovered", "Deaths", "Active"],
                datasets: [
                    {
                        label: "People",
                        backgroundColor: [
                            "rgba(0, 0, 255, 0.5)",
                            "rgba(0, 255, 0, 0.5)",
                            "rgba(255, 0, 0, 0.5)",
                            "rgba(242, 234, 0, 0.5)",
                        ],
                        hoverBackgroundColor: [
                            "rgba(0, 77, 153)",
                            "rgba(30, 102, 49)",
                            "rgba(255, 51, 51)",
                            "rgba(204, 153, 0)",
                        ],
                        data: [
                            confirmed.value,
                            recovered.value,
                            deaths.value,
                            confirmed.value - (recovered.value + deaths.value),
                        ],
                    },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
        />
    )
}
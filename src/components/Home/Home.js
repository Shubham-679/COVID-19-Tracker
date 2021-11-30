import React from 'react';
import styles from './Home.module.css';
import { connect } from 'react-redux';
import { fetchData, fetchDailyData, fetchAllCountries } from "../../redux/actions";
import { Cards, Charts, CountryPicker, MonthPicker } from '../index';
import image from '../../images/images.png';

function Home({ data, fetchData, fetchDailyData, fetchAllCountries, dailyData, countryList }) {

  const [country, setCountry] = React.useState('');
  const [monthData, setMonthData] = React.useState({ data: [], monthlyTotalConfirmed: '', monthlyTotalDeaths: '' });
  const [selectedDate, setSelectedDate] = React.useState(null);

  React.useEffect(() => {
    fetchData();
    fetchDailyData();
    fetchAllCountries();
  }, [])

  const handleCountryChange = (country) => {
    if (country === 'global') {
      fetchData();
      fetchDailyData();
      setCountry('');
    } else {
      fetchData(country);
      setCountry(country);
    }
    setMonthData({});
    setSelectedDate(null);
  }

  const handleDateChange = (selectedDate) => {
    const filteredData = dailyData.length && dailyData.filter(a => new Date(a.date).getMonth() === selectedDate._d.getMonth() && new Date(a.date).getFullYear() === selectedDate._d.getFullYear());
    const monthlyTotalConfirmed = filteredData.length ? filteredData.reduce((p, n) => { return p + n.confirmed.total }, 0) : null;
    const monthlyTotalDeaths = filteredData.length ? filteredData.reduce((p, n) => { return p + n.deaths.total }, 0) : null;
    setMonthData({ data: filteredData, monthlyTotalConfirmed, monthlyTotalDeaths });
    setSelectedDate(selectedDate);
    setCountry('');
  };

  return (
    <div>
      <main>
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <CountryPicker countryList={countryList} handleCountryChange={handleCountryChange} />
          <Cards data={data} country={country} monthData={monthData} />
          {/* <MonthPicker handleDateChange={handleDateChange} selectedDate={selectedDate} /> */}
          <Charts data={data} dailyData={dailyData} country={country} monthData={monthData} selectedDate={selectedDate} />
        </div>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  const { confirmed, deaths, recovered, lastUpdate } = state.data;
  const dailyData = state.dailyData;
  const countryList = state.countryList;
  return { data: { deaths, confirmed, recovered, lastUpdate }, dailyData, countryList };
}
export default connect(mapStateToProps, { fetchData, fetchDailyData, fetchAllCountries })(Home);

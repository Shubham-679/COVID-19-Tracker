import React from 'react';
import styles from './App.module.css';
import { connect } from 'react-redux';
import { fetchData, fetchDailyData, fetchAllCountries } from "./redux/actions";
import { Cards, Charts, CountryPicker } from './components';
import image from './images/images.png';

function App({data, fetchData, fetchDailyData, fetchAllCountries, dailyData, countryList}) {

  const [country, setCountry ] = React.useState('');

  React.useEffect(() => {
    fetchData();
    fetchDailyData();
    fetchAllCountries();
  }, [])

  const handleCountryChange = (country) => {
    fetchData(country);
    setCountry(country);
    window.scroll({top: 1000, left: 100, behavior: 'smooth'});
  }
  
  return (
    <div>
      <main>
        <div className={styles.container}>
           <img className={styles.image} src={image} alt="COVID-19" />
            <Cards data={data} country={country}/>
            <CountryPicker countryList={countryList} handleCountryChange={handleCountryChange}/>
            <Charts data={data} dailyData={dailyData} country={country}/>
        </div>
      </main>
    </div>
  );
}

function mapStateToProps(state) {
  const { confirmed, deaths, recovered, lastUpdate } = state.data;
  const dailyData  = state.dailyData;
  const countryList = state.countryList;
  return { data : {deaths, confirmed, recovered, lastUpdate}, dailyData, countryList};
}
export default connect(mapStateToProps, { fetchData, fetchDailyData, fetchAllCountries })(App);

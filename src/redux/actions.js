
export const fetchData = (country) => ({type: 'FETCH_DATA', country});
  
export const setData = (data) => ({type: 'SET_DATA', data});

export const fetchDailyData = () => ({type: 'FETCH_DAILY_DATA'});

export const setDailyData = (dailyData) => ({type: 'SET_DAILY_DATA', dailyData});

export const fetchAllCountries = () => ({type: 'FETCH_COUNTRIES'});

export const setCountryList = (countryList) => ({type: 'SET_COUNTRY_LIST', countryList});
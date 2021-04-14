
export default function counter(state = { data: {}, dailyData: {}, countryList: {} }, action) {
    switch (action.type) {
      case 'SET_DATA':
        return {...state, data: action.data}
      case 'SET_DAILY_DATA':
        return {...state, dailyData: action.dailyData}
      case 'SET_COUNTRY_LIST':
        return {...state, countryList: action.countryList}
      default:
        return state;
    }
  }
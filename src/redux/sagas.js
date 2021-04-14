import { put, takeEvery, all, call} from 'redux-saga/effects';
import axios from 'axios';
import { setData, setDailyData, setCountryList } from './actions';

const url = 'https://covid19.mathdro.id/api';

export function* fetchData() {
    let newUrl = url;
    yield takeEvery('FETCH_DATA', function* ({ country }) {
        if(country) newUrl = `${url}/countries/${country}`;
        try {
            const { data } = yield call(axios.get, [newUrl]);
            yield put(setData(data));    
        } catch (error) {
            console.log(error);
        }    
    });
}

export function* fetchDailyData() {
    yield takeEvery('FETCH_DAILY_DATA', function* () {
        try {
            const { data } = yield call(axios.get, [`${url}/daily`]);
            const newData = data.map( dailyData => ({
                confirmed: dailyData.confirmed,
                deaths: dailyData.deaths,
                date: dailyData.reportDate
            }));
            yield put (setDailyData(newData));
        } catch (error) {
            console.log(error);
        }
    })
}

export function* fetchAllCountries() {
    yield takeEvery('FETCH_COUNTRIES', function* () {
        try {
            const { data : { countries } } = yield call(axios.get, [`${url}/countries`]);
            yield put(setCountryList(countries));
        } catch (error) {
            console.log(error);
        }
    })
}

export default function* rootSaga() {
    yield all([
        fetchData(),
        fetchDailyData(),
        fetchAllCountries()
    ])
}
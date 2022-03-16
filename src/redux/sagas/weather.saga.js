import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {useSelector} from 'react-redux';




function* getCurrentConditions() {
    try{
        const response = yield axios.get('/api/weather');
        console.log(response);
        console.log(response.data.conditions[0].Temperature.Imperial.Value);
        

        yield put({type: 'CURRENT_TEMP', payload:response.data.conditions[0].Temperature.Imperial.Value})
        // yield put({type: 'CURRENT_WEATHER_TEXT', payload: response.data[0].WeatherText})

        // yield put({type: 'FIVE_DAY_FORECAST', payload: weatherResponse})
        
    }catch (error) {
        console.log('Setting Current Temp Failed: ', error);
        
    }
}




function* weatherSaga() {
    yield takeEvery('SET_CURRENT_WEATHER', getCurrentConditions);
}


export default weatherSaga;
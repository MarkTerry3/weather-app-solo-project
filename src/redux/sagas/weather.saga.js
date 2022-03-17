import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {useSelector} from 'react-redux';




function* getCurrentConditions() {
    try{
        const response = yield axios.get('/api/weather');
        console.log('response.data is: ', response.data);
        console.log(response.data.conditions[0].Temperature.Imperial.Value);
        console.log('WeatherText is', response.data.conditions[0].WeatherText);
        
        

        yield put({type: 'CURRENT_TEMP', payload:response.data.conditions[0].Temperature.Imperial.Value})
        yield put({type: 'CURRENT_WEATHER_TEXT', payload: response.data.conditions[0].WeatherText})

        // yield put({type: 'FIVE_DAY_FORECAST', payload: weatherResponse})
        
    }catch (error) {
        console.log('Setting Current Temp Failed: ', error);
        
    }
}


function* sendUpdatedZip (action) {
    console.log('action.payload is:', action.payload);

    try{
        yield axios.put('api/zip/', action.payload);
    }catch{
        console.log('error send updated Zip Code');
        
    }
}




function* weatherSaga() {
    yield takeEvery('SET_CURRENT_WEATHER', getCurrentConditions);
    yield takeEvery('EDIT_ZIP_CODE', sendUpdatedZip);
}


export default weatherSaga;
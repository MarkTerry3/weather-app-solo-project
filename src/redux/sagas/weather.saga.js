import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {useSelector} from 'react-redux';




function* getCurrentConditions() {
    try{
        const response = yield axios.get('/api/weather');
        console.log('response.data is: ', response.data);
        console.log('fiveDay is: ', response.data.fiveDay.DailyForecasts);
        
        console.log(response.data.conditions[0].Temperature.Imperial.Value);
        console.log('WeatherText is', response.data.conditions[0].WeatherText);
        
        

        yield put({type: 'CURRENT_TEMP', payload: response.data.conditions[0].Temperature.Imperial.Value})
        yield put({type: 'CURRENT_WEATHER_TEXT', payload: response.data.conditions[0].WeatherText})
        yield put({type: 'FIVE_DAY_FORECAST', payload: response.data.fiveDay.DailyForecasts})
        yield put({type: 'SET_USER_INFO', payload: response.data.userInfo})
        yield put({type: 'SET_REAL_FEEL', payload: response.data.conditions[0].RealFeelTemperature.Imperial.Value})
        yield put({type: 'SET_WIND', payload: response.data.conditions[0].Wind.Speed.Imperial.Value})
        yield put({type: 'SET_WIND_CHILL', payload: response.data.conditions[0].WindChillTemperature.Imperial.Value})
        yield put({type: 'SET_HUMIDITY', payload: response.data.conditions[0].RelativeHumidity})
        yield put({type: 'SET_PRECIPITATION', payload: response.data.conditions[0].PrecipitationSummary.Precipitation.Imperial.Value})
        yield put({type: 'SET_VISIBILITY', payload: response.data.conditions[0].Visibility.Imperial.Value})
        yield put({type: 'SET_CLOUD_COVER', payload: response.data.conditions[0].CloudCover})
        yield put({type: 'SET_NIGHT_TIME_TEXT', payload: response.data.fiveDay.DailyForecasts[0].Night.IconPhrase})
        yield put({type: 'SET_NIGHT_TIME_TEMPERATURE', payload: response.data.fiveDay.DailyForecasts[0].Temperature.Minimum.Value})
        yield put({type: 'SET_HOURLY_FORECASTS', payload: response.data.hourly})

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
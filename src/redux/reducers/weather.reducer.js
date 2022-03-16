import { combineReducers } from 'redux';


const currentTemp = (state = '', action) => {
    if (action.type === 'CURRENT_TEMP') {
        return action.payload;
    }else return state;
}

const currentWeatherText = (state = '', action) => {
    if (action.type === 'CURRENT_WEATHER_TEXT') {
        return action.payload;
    }else return state;
}

const fiveDayForecastAPI = (state = '', action) => {
    if (action.type === 'FIVE_DAY_FORECAST') {
        return action.payload;
    }else return state;
}

export default combineReducers({
    currentTemp,
    currentWeatherText,
    fiveDayForecastAPI,
})

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

const fiveDayForecastAPI = (state = [], action) => {
    if (action.type === 'FIVE_DAY_FORECAST') {
        return action.payload;
    }else return state;
}

const userInformation = (state = '', action) => {
    if (action.type === 'SET_USER_INFO') {
        return action.payload;
    }else return state;
}

const realFeelReducer = (state = '', action) => {
    if (action.type === 'SET_REAL_FEEL') {
        return action.payload;   
    }else return state;
}

const windReducer = (state = '', action) => {
    if (action.type === 'SET_WIND') {
        return action.payload;
    }else return state;
}

const windChillReducer = (state = '', action) => {
    if (action.type === 'SET_WIND_CHILL') {
        return action.payload;
    }else return state;
}

const humidityReducer = (state = '', action) => {
    if (action.type === 'SET_HUMIDITY') {
        return action.payload;
    }else return state;
}

const precipitationReducer = (state = '', action) => {
    if (action.type === 'SET_PRECIPITATION') {
        return action.payload;
    }else return state;
}

const visibilityReducer = (state = '', action) => {
    if (action.type === 'SET_VISIBILITY') {
        return action.payload;
    }else return state;
}

const cloudCoverReducer = (state = '', action) => {
    if (action.type === 'SET_CLOUD_COVER') {
        return action.payload;
    }else return state;
}

export default combineReducers({
    currentTemp,
    currentWeatherText,
    fiveDayForecastAPI,
    userInformation,
    realFeelReducer,
    windReducer,
    windChillReducer,
    humidityReducer,
    precipitationReducer,
    visibilityReducer,
    cloudCoverReducer
})

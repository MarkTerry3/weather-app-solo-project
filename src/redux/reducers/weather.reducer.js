const currentTemp = (state = '', action) => {
    if (action.type === 'CURRENT_TEMP') {
        return action.payload;
    }else return state;
}


export default currentTemp;
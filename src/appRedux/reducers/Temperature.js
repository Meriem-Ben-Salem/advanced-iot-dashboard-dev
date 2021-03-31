import {
  Temp_GET_LIST,
  Humidity_GET_LIST_SUCCESS,
  Pressure_GET_LIST_SUCCESS,
  Battery_GET_LIST_SUCCESS,
  LAST_MINUTE_VALUES
} from "../../util/constants/ActionTypes";

//***********************************************INIT_STATE*************************************//
const INIT_STATE = {
 TempList: [],
 TempListSeries:[],
 HumiditySeries:[],
 PressureSeries:[],
 BatterySeries:[]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {

      case LAST_MINUTE_VALUES: {
          console.log('LAST_MINUTE_VALUES_SUCCESS REDUUCCERRR');
          return {
              ...state,
              TempList: action.payload
          }
      }
      case Temp_GET_LIST: {
        console.log('Temp_GET_LIST_SUCCESS REDUUCCERRR');
        return {
            ...state,
            TempListSeries: action.payload
        }
    }
    case Humidity_GET_LIST_SUCCESS: {
      console.log('Humidity_GET_LIST_SUCCESS_SUCCESS REDUUCCERRR');
      return {
          ...state,
          HumiditySeries: action.payload
      }
  }
  case Pressure_GET_LIST_SUCCESS: {
    console.log('Pressure_GET_LIST_SUCCESS_SUCCESS REDUUCCERRR');
    return {
        ...state,
        PressureSeries: action.payload
    }
}
case Battery_GET_LIST_SUCCESS: {
  console.log('Battery_GET_LIST_SUCCESS_SUCCESS REDUUCCERRR');
  return {
      ...state,
      BatterySeries: action.payload
  }
}
      default:
          return state;
  }
}

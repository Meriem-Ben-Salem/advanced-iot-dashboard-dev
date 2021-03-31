import {
   FETCH_ERROR,
   FETCH_SUCCESS,
   FETCH_START,
   Temp_GET_LIST,
   LAST_MINUTE_VALUES,
   Humidity_GET_LIST_SUCCESS,
   Pressure_GET_LIST_SUCCESS,
   Battery_GET_LIST_SUCCESS
} from "../../util/constants/ActionTypes";

import { getListTempRequest,getSeriesRequest} from "../../services/Temperture";





//*************************************************getLatestTimeseriesAction*************************************************//
export const getLatestTimeseriesAction = (values) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      getListTempRequest(values).then((data) => {
        console.log("****Response Temp List****", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: LAST_MINUTE_VALUES, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
    }
  };


//*************************************************getSeriesTempatureAction*************************************************//
  export const getSeriesTempatureAction = (values) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      getSeriesRequest(values).then((data) => {
        console.log("****Response Temp List****", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: Temp_GET_LIST, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
    }
  };

  
//*************************************************getSeriesHumidityAction*************************************************//
  export const getSeriesHumidityAction = (values) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      getSeriesRequest(values).then((data) => {
        console.log("****Response Temp List****", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: Humidity_GET_LIST_SUCCESS, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
    }
  };


//*************************************************getSeriesPressureAction*************************************************//
  export const getSeriesPressureAction = (values) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      getSeriesRequest(values).then((data) => {
        console.log("****Response Temp List****", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: Pressure_GET_LIST_SUCCESS, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
    }
  };


//*************************************************getSeriesBatteryAction*************************************************//
  export const getSeriesBatteryAction = (values) => {
    return (dispatch) => {
      dispatch({ type: FETCH_START });
      getSeriesRequest(values).then((data) => {
        console.log("****Response Temp List****", data);
        if (data) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: Battery_GET_LIST_SUCCESS, payload: data });
        } else {
          dispatch({ type: FETCH_ERROR, payload: data.error });
        }
      }).catch(function (error) {
        dispatch({ type: FETCH_ERROR, payload: error.message });
        console.log("Error****:", error.message);
      });
    }
  };
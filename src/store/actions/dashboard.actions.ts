import { fetchDoughnutData, fetchLineData } from "../../services/api.service";

export const REQUEST_DOUGHNUT_DATA = 'REQUEST_DOUGHNUT_DATA';
export const REQUEST_DOUGHNUT_DATA_SUCCESS = 'REQUEST_DOUGHNUT_DATA_SUCCESS';
export const REQUEST_DOUGHNUT_DATA_FAIL = 'REQUEST_DOUGHNUT_DATA_FAIL';
export const REQUEST_LINE_DATA = 'REQUEST_LINE_DATA';
export const REQUEST_LINE_DATA_SUCCESS = 'REQUEST_LINE_DATA_SUCCESS';
export const REQUEST_LINE_DATA_FAIL = 'REQUEST_LINE_DATA_FAIL';

const requestDoughnutData = () => ({
    type: REQUEST_DOUGHNUT_DATA,
    payload: {
        isFetching: true
    }
});

const requestLineData = () => ({
    type: REQUEST_LINE_DATA,
    payload: {
        isFetching: true
    }
});

const requestDoughnutDataSuccess = (payload: any) => ({
    type: REQUEST_DOUGHNUT_DATA_SUCCESS,
    payload
});

const requestDoughnutDataFail = (payload: any) => ({
    type: REQUEST_DOUGHNUT_DATA_FAIL,
    payload
});

const requestLineDataSuccess = (payload: any) => ({
    type: REQUEST_LINE_DATA_SUCCESS,
    payload
});

const requestLineDataFail = (payload: any) => ({
    type: REQUEST_LINE_DATA_FAIL,
    payload
});

export const doughnutDataAction = () => {
    return (dispatch: any, getState: any) => {
        dispatch(requestDoughnutData());

        // Returns the state if data is retrieved.
        const state = getState().dashboard.doughnut;
        if (state && state.data) {
            return () => dispatch(requestDoughnutDataSuccess(state.data));
        }

        // Fetchs data if not.
        return fetchDoughnutData().then(data => {
            dispatch(requestDoughnutDataSuccess(data));
        }).catch(err => {
            dispatch(requestDoughnutDataFail(err));
        });
    }
}

export const lineDataAction = () => {
    return (dispatch: any, getState: any) => {
        dispatch(requestLineData());

        // Returns the state if data is retrieved.
        const state = getState().line.doughnut;
        if (state && state.data) {
            return () => dispatch(requestLineDataSuccess(state.data));
        }

        // Fetchs data if not.
        return fetchLineData().then(data => {
            dispatch(requestLineDataSuccess(data));
        }).catch(err => {
            dispatch(requestLineDataFail(err));
        });
    }
}
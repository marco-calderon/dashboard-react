import { fetchDoughnutData, fetchFeed, fetchLineData, fetchOrders } from "../../services/api.service";

export const REQUEST_DOUGHNUT_DATA = 'REQUEST_DOUGHNUT_DATA';
export const REQUEST_DOUGHNUT_DATA_SUCCESS = 'REQUEST_DOUGHNUT_DATA_SUCCESS';
export const REQUEST_DOUGHNUT_DATA_FAIL = 'REQUEST_DOUGHNUT_DATA_FAIL';

export const REQUEST_LINE_DATA = 'REQUEST_LINE_DATA';
export const REQUEST_LINE_DATA_SUCCESS = 'REQUEST_LINE_DATA_SUCCESS';
export const REQUEST_LINE_DATA_FAIL = 'REQUEST_LINE_DATA_FAIL';

export const REQUEST_FEED = 'REQUEST_FEED';
export const REQUEST_FEED_SUCCESS = 'REQUEST_FEED_SUCCESS';
export const REQUEST_FEED_FAIL = 'REQUEST_FEED_FAIL';

export const REQUEST_ORDERS = 'REQUEST_ORDERS';
export const REQUEST_ORDERS_SUCCESS = 'REQUEST_ORDERS_SUCCESS';
export const REQUEST_ORDERS_FAIL = 'REQUEST_ORDERS_FAIL';

const requestDoughnutData = () => ({
    type: REQUEST_DOUGHNUT_DATA,
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

const requestLineData = () => ({
    type: REQUEST_LINE_DATA,
    payload: {
        isFetching: true
    }
});

const requestLineDataSuccess = (payload: any) => ({
    type: REQUEST_LINE_DATA_SUCCESS,
    payload
});

const requestLineDataFail = (payload: any) => ({
    type: REQUEST_LINE_DATA_FAIL,
    payload
});

const requestFeed = () => ({
    type: REQUEST_FEED,
    payload: {
        isFetching: true
    }
});

const requestFeedSuccess = (payload: any) => ({
    type: REQUEST_FEED_SUCCESS,
    payload
});

const requestFeedFail = (payload: any) => ({
    type: REQUEST_FEED_FAIL,
    payload
});

const requestOrders = () => ({
    type: REQUEST_ORDERS,
    payload: {
        isFetching: true
    }
});

const requestOrdersSuccess = (payload: any) => ({
    type: REQUEST_ORDERS_SUCCESS,
    payload
});

const requestOrdersFail = (payload: any) => ({
    type: REQUEST_ORDERS_FAIL,
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
        const state = getState().dashboard.line;
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
    
export const feedAction = () => {
    return (dispatch: any, getState: any) => {
        dispatch(requestFeed());

        // Returns the state if data is retrieved.
        const state = getState().dashboard.feed;
        if (state && state.data) {
            return () => dispatch(requestFeedSuccess(state.data));
        }

        // Fetchs data if not.
        return fetchFeed().then(data => {
            dispatch(requestFeedSuccess(data));
        }).catch(err => {
            dispatch(requestFeedFail(err));
        });
    }
}

export const ordersAction = () => {
    return (dispatch: any, getState: any) => {
        dispatch(requestOrders());

        // Returns the state if data is retrieved.
        const state = getState().dashboard.orders;
        if (state && state.data) {
            return () => dispatch(requestOrdersSuccess(state.data));
        }

        // Fetchs data if not.
        return fetchOrders().then(data => {
            dispatch(requestOrdersSuccess(data));
        }).catch(err => {
            dispatch(requestOrdersFail(err));
        });
    }
}
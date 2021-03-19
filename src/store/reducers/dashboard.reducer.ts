import { REQUEST_DOUGHNUT_DATA, REQUEST_DOUGHNUT_DATA_FAIL, REQUEST_DOUGHNUT_DATA_SUCCESS, REQUEST_LINE_DATA, REQUEST_LINE_DATA_FAIL, REQUEST_LINE_DATA_SUCCESS } from "../actions/dashboard.actions";
import { initialState } from "../states/dashboard.state";

const dashboardReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case REQUEST_DOUGHNUT_DATA:
            return { ...state, doughnut: action.payload };
        case REQUEST_DOUGHNUT_DATA_SUCCESS:
            return { ...state, doughnut: { isFetching: false, data: action.payload }};
        case REQUEST_DOUGHNUT_DATA_FAIL:
            return { ...state, doughnut: { isFetching: false }};
        case REQUEST_LINE_DATA:
            return { ...state, line: action.payload };
        case REQUEST_LINE_DATA_SUCCESS:
            return { ...state, line: { isFetching: false, data: action.payload }};
        case REQUEST_LINE_DATA_FAIL:
            return { ...state, line: { isFetching: false }};
        default:
            return state;
    }
}

export default dashboardReducer;
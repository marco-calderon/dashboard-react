export const initialState = {
    doughnut: {
        isFetching: false,
        data: []
    },
    line: {
        isFetching: false,
        data: []
    }
};

export interface DashboardState {
    doughnut: {
        isFetching: boolean,
        data: Array<any>
    };
    line: {
        isFetching: boolean,
        data: Array<any>
    };
}
import { Feed } from "../../models/feed.model";

export const initialState = {
    doughnut: {
        isFetching: false,
        data: []
    },
    line: {
        isFetching: false,
        data: []
    },
    feed: {
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
    feed: {
        isFetching: boolean,
        data: Array<Feed>
    }
}
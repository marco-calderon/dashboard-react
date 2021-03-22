import { Feed } from "../../models/feed.model";
import { Order } from "../../models/order.model";

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
    },
    orders: {
        isFetching: false,
        data: null
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
        data: Feed[]
    },
    orders: {
        isFetching: boolean,
        data: { headers: any, data: Order[] }
    }
}
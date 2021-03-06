import { Feed } from "../models/feed.model";
import { Order } from "../models/order.model";

export const fetchLineData = () => {
    return new Promise((resolve, reject) => {
        resolve([
            { label: 0, value: 200 },
            { label: 1, value: 400 },
            { label: 2, value: 350 },
            { label: 3, value: 200 },
            { label: 4, value: 130 },
            { label: 5, value: 560 },
            { label: 6, value: 270 },
            { label: 7, value: 450 },
            { label: 8, value: 870 },
            { label: 9, value: 140 },
        ]);  
    });
}

export const fetchDoughnutData = () => {
    return new Promise((resolve, reject) => {
        resolve([
            { key: 'Completed', value: 3},
            { key: 'In progress', value: 10},
            { key: 'Backlog', value: 16},
            { key: 'Under review', value: 8},
        ]);     
    });
}

export const fetchFeed = (): Promise<Array<Feed>> => {
    return new Promise((resolve, reject) => {
        resolve([
            { id: 1, description: 'You have 4 pending task for today.', date: new Date().valueOf(), priority: 'Medium', icon: 'task' },
            { id: 2, description: 'A new project has been added.', date: new Date().valueOf(), priority: 'High', icon: 'project' },
            { id: 3, description: 'You have received a new order.', date: new Date().valueOf(), priority: 'Medium', icon: 'order' },
            { id: 4, description: 'Payments for last week have been processed.', date: new Date().valueOf(), priority: 'Low', icon: 'money' },
            { id: 5, description: 'Location has been updated.', date: new Date().valueOf(), priority: 'High', icon: 'mapMarker' },
            { id: 6, description: 'The project is on fire.', date: new Date().valueOf(), priority: 'Low', icon: 'project' },
        ]);      
    });
}

export const fetchOrders = (): Promise<{ headers: { key: string, label: string}[], data: Order[] }> => {
    return new Promise((resolve, reject) => {
        resolve({
            headers: [
                { key: 'title', label: 'Title' },
                { key: 'items', label: 'Item' },
                { key: 'date', label: 'Date' },
                { key: 'total', label: 'Total' },
            ],
            data: [
                { id: 1, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
                { id: 2, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
                { id: 3, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
                { id: 4, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
                { id: 5, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
                { id: 6, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
                { id: 7, title: 'Order #9866362', items: 5, total: 2376.5, date: new Date().valueOf() },
            ]
        });
    });
}
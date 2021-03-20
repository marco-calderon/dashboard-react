import { Feed } from "../models/feed.model";

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
            { key: 'Completed', value: 10},
            { key: 'In progress', value: 10},
            { key: 'Backlog', value: 10},
            { key: 'Under review', value: 10},
        ]);     
    });
}

export const fetchFeed = (): Promise<Array<Feed>> => {
    return new Promise((resolve, reject) => {
        resolve([
            { id: 1, description: 'You have 4 pending task for today.', date: new Date(), priority: 'Medium', icon: 'task' },
            { id: 2, description: 'A new project has been added.', date: new Date(), priority: 'High', icon: 'project' },
            { id: 3, description: 'You have received a new order.', date: new Date(), priority: 'Medium', icon: 'order' },
            { id: 4, description: 'Payments for last week have been processed.', date: new Date(), priority: 'Low', icon: 'money' },
            { id: 5, description: 'Location has been updated.', date: new Date(), priority: 'High', icon: 'mapMarker' },
            { id: 6, description: 'The project is on fire.', date: new Date(), priority: 'Low', icon: 'project' },
        ]);      
    });
}
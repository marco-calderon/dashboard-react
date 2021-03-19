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


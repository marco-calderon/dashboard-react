export const getLineData = () => {
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

export const getDoughnutData = () => {
    return new Promise((resolve, reject) => {
        resolve({
            labels: ['Completed', 'In progress', 'Backlog', 'Under review'],
            datasets:[{
                label: 'Tasks',
                data: [10, 5, 10, 10]
            }],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
        });
    });
}
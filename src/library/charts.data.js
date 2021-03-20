export const getDoughnutData = (data) => {
    if (!data || data.length === 0) {
        return {};
    }
    
    const labels = data.map(d => d.key);
    const values = data.map(d => d.value);

    return {
        labels,
        datasets:[{
            label: 'Tasks',
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)'
            ]
        }],
    };
}

export const getLineData = (data) => {
    if (!data || data.length === 0) {
        return {};
    }
    
    const values = data.map((d, i) => ({ y: d.value, x: i }));

    return {
        datasets:[{
            label: 'Tasks',
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
            ]
        }],
    };
}
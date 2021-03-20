export const capFirstLetter = (str: string) => {
    if (!str || str.length === 0) {
        return str;
    }

    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length).toLowerCase();
}
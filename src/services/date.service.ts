export const dateToLocalString = (date: Date) => {
    return date.toLocaleDateString(undefined, {
        dateStyle: 'medium'
    });
};
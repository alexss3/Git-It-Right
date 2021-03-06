export const returnMDY = date => {
    if (!date) return date;
    if (!Date.parse(date)) return '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate;
}
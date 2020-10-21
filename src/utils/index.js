import * as $routes from '../routes';

/**
 *
 * @param date
 * @param format
 * @returns {string}
 */
export const dateFormat = (date, format) => {
    let dateStr = '';
    if (!date) return dateStr;
    let dateType = typeof date;
    let newDate = dateType === 'string' ?
        new Date(date.replace(/-/g, '/')) : date;
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();
    let hour = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();
    const monthStr = month > 9 ? '' + month : '0' + month;
    const dayStr = day > 9 ? '' + day : '0' + day;
    const hourStr = hour > 9 ? '' + hour : '0' + hour;
    const minuteStr = minute > 9 ? '' + minute : '0' + minute;
    const secondStr = second > 9 ? '' + second : '0' + second;
    switch (format) {
        case 'yyyy/mm/dd':
            dateStr = year + '/' + monthStr + '/' + dayStr;
            break;
        case 'yyyy/mm/dd hh':
            dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr;
            break;
        case 'yyyy/mm/dd hh:mm':
            dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr;
            break;
        case 'yyyy/mm/dd hh:mm:ss':
            dateStr = year + '/' + monthStr + '/' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
            break;
        case 'yyyy-mm-dd':
            dateStr = year + '-' + monthStr + '-' + dayStr;
            break;
        case 'yyyy-mm-dd hh':
            dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr;
            break;
        case 'yyyy-mm-dd hh:mm':
            dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minuteStr;
            break;
        case 'yyyy-mm-dd hh:mm:ss':
            dateStr = year + '-' + monthStr + '-' + dayStr + ' ' + hourStr + ':' + minuteStr + ':' + secondStr;
            break;
        case 'zh-cn':
            dateStr = year + '年' + monthStr + '月' + dayStr + '日';
            break;
    }
    newDate = null;
    return dateStr;
};
/**
 *
 * @param res
 * @returns {Array}
 */
export const cityFormat = (res) => {
    res = res || {};
    const {result} = res;
    const totalCity = [];
    const CONST_LAB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const CONST_HOT = ['北京市', '上海市', '广州市'];
    const CONST_DEL = ['北京市', '上海市', '重庆市', '天津市'];
    const tempCity1 = result[0].filter((item) => {
        return CONST_DEL.indexOf(item.fullname) !== -1;
    });
    const tempCity2 = result[1].filter((item) => {
        for (let i in tempCity1) {
            const subId1 = tempCity1[i].id.substring(0, 2);
            const subId2 = item.id.substring(0, 2);
            if (subId1 === subId2) return;
        }
        return item;
    });
    const tempCity3 = tempCity1.concat(tempCity2);
    const keys = CONST_LAB.split('');
    for (let i = 0; i < keys.length; i++) {
        totalCity[i] = {label: keys[i], items: []};
        for (let j in tempCity3) {
            const {pinyin} = tempCity3[j];
            const str = pinyin[0].substring(0, 1);
            const key = str.toLocaleUpperCase();
            if (keys[i] === key) {
                totalCity[i].items.push(tempCity3[j]);
            }
        }
    }
    totalCity.unshift({label: '热门城市', items: []});
    totalCity[0].items = tempCity3.filter((item) => {
        return CONST_HOT.indexOf(item.fullname) !== -1;
    });
    return totalCity;
};

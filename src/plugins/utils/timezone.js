const momentTZ = require('moment-timezone');

export const getAppTimezone = (inputTz) => {
    const _appTimeZone = window?.appInfo?.appTimeZone;
    const tz = inputTz === 'global' ? _appTimeZone : inputTz;

    if (tz && tz !== 'user') {
        // 指定的固定的时区
        return tz;
    } else {
        // 用户本地时区，包括 tz 是 null 的场景
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
};

const validIANATimezoneCache = {};
// 判断是否是有效的时区字符
export function isValidTimezoneIANAString(timezoneString) {
    if (validIANATimezoneCache[timezoneString])
        return true;
    try {
        new Intl.DateTimeFormat(undefined, { timeZone: timezoneString });
        validIANATimezoneCache[timezoneString] = true;
        return true;
    } catch (error) {
        return false;
    }
}

export function naslDateToLocalDate(date) {
    const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localDate = momentTZ.tz(date, 'YYYY-MM-DD', localTZ);
    return new Date(localDate.format('YYYY-MM-DD HH:mm:ss'));
}

export function convertJSDateInTargetTimeZone(date, tz) {
    return new Date(momentTZ.tz(date, getAppTimezone(tz)).format('YYYY-MM-DD HH:mm:ss.SSS'));
}

/**
 * 判断字符串日期是否合法
 * yyyy-MM-dd yyyy/MM/dd HH:mm:ss yyyy.MM.dd 3种格式
 * @param {*} dateString
 * @returns
 */
export function isValidDate(dateString, reg) {
    if (!reg.test(dateString)) {
        return false;
    }
    // 验证日期是否真实存在
    const date = naslDateToLocalDate(dateString);
    if (date.toString() === 'Invalid Date') {
        return false;
    }
    let splitChar;
    if (dateString.includes('-')) {
        splitChar = '-';
    } else if (dateString.includes('/')) {
        splitChar = '/';
    } else if (dateString.includes('.')) {
        splitChar = '.';
    }
    const [year, month, day] = dateString.split(' ')?.[0]?.split(splitChar).map(Number);
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        return false;
    }
    return true;
}

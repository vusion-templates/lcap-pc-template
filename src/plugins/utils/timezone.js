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

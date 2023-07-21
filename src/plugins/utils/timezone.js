export const getAppTimezone = () => {
    const _appTimeZone = window?.appInfo?.appTimeZone;
    const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // 用户本地时区
    if (_appTimeZone === 'user' || !_appTimeZone) {
        return localTimeZone;
    } else {
        return _appTimeZone;
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

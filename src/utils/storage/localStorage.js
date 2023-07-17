function noop() {
    return '';
}
const noSupport = {
    set: noop,
    get: noop,
    remove: noop,
    clear: noop,
};

const isLocalStorageAvailable = () => {
    try {
        const key = 'testlocastorage';
        window.localStorage.setItem(key, '1');
        window.localStorage.removeItem(key);

        return true;
    } catch (error) {
        return false;
    }
};

const storage = isLocalStorageAvailable() ? window.localStorage : null;

const storageObj = !storage ? noSupport : {
    set(key, value, stringify = false) {
        try {
            storage.setItem(key, stringify ? JSON.stringify(value) : value);
        } catch (error) {
            if (error.name === 'QuotaExceededError') {
                // eslint-disable-next-line no-alert
                if (confirm('本地缓存已满，可能导致部分功能无法正常使用，请清理后继续。清空缓存？')) {
                    storage.clear();
                }
            } else {
                console.error('An error occurred:', error);
            }
        }
    },
    get(key, parseJson = false) {
        const value = storage.getItem(key);
        if (parseJson) {
            try {
                return JSON.parse(value);
            } catch (error) {
                console.error('JSON parsing error:', error);
                return null;
            }
        } else {
            return value;
        }
    },
    remove(key) {
        return storage.removeItem(key);
    },
    clear() {
        storage.clear();
    },
};

export default storageObj;


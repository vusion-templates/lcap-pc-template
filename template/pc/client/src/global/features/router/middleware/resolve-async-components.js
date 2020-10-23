/* copy from https://github.com/vuejs/vue-router/blob/v3.3.4/src/util/resolve-components.js */

import Vue from 'vue';
export default function resolveAsyncComponents(matched) {
    return (to, from, next) => {
        let hasAsync = false;
        let pending = 0;
        let error = null;

        flatMapComponents(matched, (def, _, match, key) => {
            // if it's a function and doesn't have cid attached,
            // assume it's an async component resolve function.
            // we are not using Vue's default async resolving mechanism because
            // we want to halt the navigation until the incoming component has been
            // resolved.
            if (typeof def === 'function' && def.cid === undefined) {
                hasAsync = true;
                pending++;

                const resolve = (resolvedDef) => {
                    if (isESModule(resolvedDef)) {
                        resolvedDef = resolvedDef.default;
                    }
                    // save resolved on async factory in case it's used elsewhere
                    def.resolved = typeof resolvedDef === 'function' ? resolvedDef : Vue.extend(resolvedDef);
                    match.components[key] = resolvedDef;
                    pending--;
                    if (pending <= 0) {
                        next();
                    }
                };

                const reject = (reason) => {
                    const msg = `Failed to resolve async component ${key}: ${reason}`;
                    if (!error) {
                        error = reason instanceof Error ? reason : new Error(msg);
                        next(error);
                    }
                };

                let res;
                try {
                    res = def(resolve, reject);
                } catch (e) {
                    reject(e);
                }
                if (res) {
                    if (typeof res.then === 'function') {
                        res.then(resolve, reject);
                    } else {
                        // new syntax in Vue 2.3
                        const comp = res.component;
                        if (comp && typeof comp.then === 'function') {
                            comp.then(resolve, reject);
                        }
                    }
                }
            }
        });

        if (!hasAsync)
            next();
    };
}

function flatMapComponents(matched, fn) {
    return flatten(matched.map((m) => Object.keys(m.components).map((key) => fn(
        m.components[key],
        m.instances[key],
        m, key,
    ))));
}

function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}

const hasSymbol
  = typeof Symbol === 'function'
  && typeof Symbol.toStringTag === 'symbol';

function isESModule(obj) {
    return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
}


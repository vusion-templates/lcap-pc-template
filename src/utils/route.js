const filterRoutes = (routes, ancestorPaths, compareFn) => {
    const newRoutes = [];
    if (Array.isArray(routes)) {
        for (let i = 0; i < routes.length; i++) {
            const route = routes[i];
            const routePath = route.path;
            if (!Array.isArray(ancestorPaths)) {
                ancestorPaths = [];
            }
            let newRoute = null;
            if (compareFn(route, ancestorPaths)) {
                const { children, ...others } = route || {};
                newRoute = {
                    ...others,
                };
                newRoutes.push(newRoute);
            }
            const routeChildren = route.children;
            if (newRoute && Array.isArray(routeChildren) && routeChildren.length) {
                const children = filterRoutes(routeChildren, [...ancestorPaths, routePath], compareFn);
                if (Array.isArray(children) && children.length) {
                    newRoute.children = children;
                }
            }
        }
    }
    return newRoutes;
};

function parsePath(path) {
    if (!path) {
        return;
    }
    let hash = '';
    const query = {};
    const hashIndex = path.indexOf('#');
    if (hashIndex >= 0) {
        hash = path.slice(hashIndex);
        path = path.slice(0, hashIndex);
    }
    const queryIndex = path.indexOf('?');
    if (queryIndex >= 0) {
        const queryStr = path.slice(queryIndex + 1);
        if (queryStr) {
            const paramPairStrArr = queryStr.split('&');
            if (Array.isArray(paramPairStrArr)) {
                paramPairStrArr.forEach((paramPairStr) => {
                    const paramPairArr = paramPairStr.split('=');
                    if (Array.isArray(paramPairArr)) {
                        query[paramPairArr[0]] = paramPairArr[1];
                    }
                });
            }
        }
        path = path.slice(0, queryIndex);
    }

    return {
        path,
        query,
        hash,
    };
}

export {
    filterRoutes,
    parsePath,
};

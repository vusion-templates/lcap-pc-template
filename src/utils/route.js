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
                newRoute = {
                    ...route,
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

export {
    filterRoutes,
};

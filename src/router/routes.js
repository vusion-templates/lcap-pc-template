const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: require('../views/dashboard/index.vue').default,
    },
    {
        path: '/gggg',
        name: 'gggg',
        component: require('../views/gggg/index.vue').default,
    },
    {
        path: '/index',
        name: 'index',
        component: require('../views/index/index.vue').default,
    },
    {
        path: '/login',
        name: 'login',
        component: require('../views/login/index.vue').default,
    },
    {
        path: '/noAuth',
        name: 'noAuth',
        component: require('../views/noAuth/index.vue').default,
    },
    {
        path: '/notFound',
        name: 'notFound',
        component: require('../views/notFound/index.vue').default,
    },
    {
        path: '/permission_center',
        name: 'permission_center',
        component: require('../views/permission_center/index.vue').default,
        children: [
            {
                path: 'addRoleUser',
                name: 'addRoleUser',
                component: require('../views/permission_center/views/addRoleUser/index.vue').default,
            },
            {
                path: 'resourceManagement',
                name: 'resourceManagement',
                component: require('../views/permission_center/views/resourceManagement/index.vue').default,
            },
            {
                path: 'roleManagement',
                name: 'roleManagement',
                component: require('../views/permission_center/views/roleManagement/index.vue').default,
            },
        ],
    },
    {
        path: '/',
        name: 'index',
        component: require('../views/index/index.vue').default,
    },
    {
        path: '*',
        redirect: 'notFound',
    },
];

export default routes;

const routes = [
    {
        path: '/',
        component: () => import('layouts/Layout.vue'),
        children: [
        { 
            path: '', 
            component: () => import('pages/TodoPage.vue') 
        },
        { 
            path: '/settings', 
            component: () => import('pages/SettingsPage.vue') 
        }
        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () => import('pages/Error404.vue')
    }
]

export default routes

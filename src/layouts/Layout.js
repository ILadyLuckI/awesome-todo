import { openURL } from "quasar";

export default {
    name: "Layout",

    data() {
        return {
            leftDrawerOpen: false,
            navs: [
                {
                    label: 'Todo',
                    icon: 'list',
                    to: '/'
                },
                {
                    label: 'Settings',
                    icon: 'settings',
                    to: '/settings'
                }
            ]
        };
    },
    methods: {
        openURL
    }
};

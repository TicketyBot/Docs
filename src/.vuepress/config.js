module.exports = {
    title: 'Tickety Documentation',
    description: 'Documentation for the Tickety discord bot',
    dest: './public',
    themeConfig: {
        displayAllHeaders: true,
        lastUpdated: 'Last Edited',
        nav: [
            {
                text: 'Introduction',
                link: '/'
            },
            {
                text: 'Setup',
                link: '/setup/'
            },
            {
                text: 'Commands',
                link: '/commands/'
            },
            {
                text: 'Premium',
                link: '/premium/'
            },
            {
                text: 'Webpanel',
                link: '/webpanel/'
            },
            {
            	text: 'Enterprise',
            	link: '/enterprise/'
            }
        ],
        sidebar: 'auto'
    }
}
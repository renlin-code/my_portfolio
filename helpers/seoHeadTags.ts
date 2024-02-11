export default (title: string, description:string, route: object) => {
    const meta = [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
    ];

    const link: [] = [];

    // switch (process.env.appEnv) {
    //     case 'staging':
    //         meta.push({ hid: 'robots', name: 'robots', content: 'nofollow, noindex' });
    //         break;
    //     case 'production':
    //         link.push({ rel: 'canonical', href: process.env.baseUrl + route.path });
    //         break;
    // }

    return { title, meta, link };
};

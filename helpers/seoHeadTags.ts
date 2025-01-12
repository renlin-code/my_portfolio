export default (title: string, description:string, author: string) => {
    const meta = [
        { hid: 'description', name: 'description', content: description },
        { hid: 'author', name: 'author', content: author },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
    ];

    return { title, meta };
};

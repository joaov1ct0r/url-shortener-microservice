import isUrl from 'is-url';

let links = [];

let id = 0;

const handleNewUrl = (req, res) => {
    let { url } = req.body;

    if (!isUrl(url)) {
        return res.json({
            error: 'invalid url'
        });
    } else {
        id++;

        const link = {
            original_url: url,
            short_url: `${id}`
        };

        links.push(link);

        return res.json(link);
    }
};

const handleShortUrl = (req, res) => {
    const { url } = req.params;

    const existedLink = links.find(link => link.short_url === url);

    if (!existedLink) return res.json({ error: 'invalid url' });
    else res.redirect(existedLink.original_url);
};

export { handleNewUrl, handleShortUrl };

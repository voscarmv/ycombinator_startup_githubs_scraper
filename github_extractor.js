import fetch from 'node-fetch';

(
    async () => {
        const html = await fetch('https://www.getlago.com/');
        const html_text = await html.text();
        const githubs = html_text.match(/github.com\/[A-Za-z0-9_.-/]+/g);
        console.log(githubs.toString());
    }
)();
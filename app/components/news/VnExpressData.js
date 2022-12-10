import Parser from "rss-parser";

const vnexpressPath = '/vnexpress/rss'
const world_rss = '/the-gioi.rss'

export async function getRss(types) {
    let finalNews = new Array();
    let parser = new Parser();

    await Promise.all(types.map(async (type) => {
        await parser.parseURL(`${process.env.NEXT_PUBLIC_API_HOST}/vnexpress/rss/${type}.rss`)
            .then((data) => {
                data.items.forEach((element, index) => {
                    element.content = element.content.substring(0, element.content.lastIndexOf('</a>'))
                })

                finalNews = finalNews.concat(data.items);
            })

    }))
    return finalNews;
}

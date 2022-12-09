import Parser from "rss-parser";

const vnexpressPath = '/vnexpress/rss'
const world_rss = '/the-gioi.rss'

export async function getRss() {
    let rss;
    let parser = new Parser();
    rss = await parser.parseURL(process.env.NEXT_PUBLIC_API_HOST + vnexpressPath + world_rss)

    rss.items.forEach((element, index) => {
        element.content = element.content.substring(0, element.content.lastIndexOf('</a>'))
    })

    return rss;
}
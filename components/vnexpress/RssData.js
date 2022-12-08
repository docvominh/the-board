// import {xml2json} from "xml-js";
//
// const vnexpressPath = '/vnexpress/rss'
// const world_rss = '/the-gioi.rss'
//
// export async function getRss() {
//     let rss;
//     await fetch(process.env.API_HOST + vnexpressPath + world_rss,
//         {
//             method: 'GET'
//         })
//         .then(response => {
//             return response.text();
//         }).then((rssText) => {
//             console.log(rssText)
//             rss = xml2json(rssText, {compact: false, spaces: 4})
//         })
//
//     return rss;
// }
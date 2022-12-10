// import process from "eslint-config-next";

const indexPath = '/tcbs/index'
const vnIndexPath = '/athena/v1/indexSnaps?indexes=1'
const worldIndexPath = '/athena/v1/worldIndexes'

const infoPath = '/tcbs/info'
const pricePath = '/athena/v1/futureIndexes'


// const stockPath = '/tcbs/stock/'

// new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// })

// top trade https://athenaaws.tcbs.com.vn/athena/v1/topTradingVol
// price https://athenaaws.tcbs.com.vn/athena/v1/futureIndexes
export async function getIndexes(indexes) {
    let allIndexes = new Array();
    await fetch(process.env.NEXT_PUBLIC_API_HOST + indexPath + vnIndexPath,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'Keep-Alive',
                'Keep-Alive': 'timeout=5, max=1000'
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json => {
            let vnIndex = {
                name: 'VN',
                index: Math.ceil(json.data[0].index),
                // preIndex: json.data[0].preIndex,
                changePercent: roundUp(json.data[0].changePercent, 2)
            }
            allIndexes.push(vnIndex)
        })
        .catch((error) => {
            console.error(error);
        });

    await fetch(process.env.NEXT_PUBLIC_API_HOST + indexPath + worldIndexPath,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'Keep-Alive',
                'Keep-Alive': 'timeout=5, max=1000'
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json => {

            json.data.forEach((currentValue, index, arr) => {
                let obj = {
                    name: currentValue.enName,
                    index: Math.ceil(currentValue.value),
                    changePercent: roundUp(currentValue.changePercent, 2)
                }
                allIndexes.push(obj)
            })
        })
        .catch((error) => {
            console.error(error);
        });
    let finalIndexes = new Array();
    allIndexes.forEach((e,i) =>{
        if(indexes.includes(e.name)){
            finalIndexes.push(e);
        }
    })

    return finalIndexes.sort((a, b) => (a.name > b.name) ? 1 : -1);
}

export async function getPrices(types) {

    let allPrices = new Array();
    await fetch(process.env.NEXT_PUBLIC_API_HOST + indexPath + pricePath,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'Keep-Alive',
                'Keep-Alive': 'timeout=5, max=1000'
            }
        })
        .then(response => {
            return response.json()
        })
        .then(json => {

            json.data.forEach((currentValue, index, arr) => {
                let obj = {
                    name: currentValue.enName,
                    price: roundUp(currentValue.value, 2),
                    changePercent: roundUp(currentValue.changePercent, 2)
                }
                allPrices.push(obj)
            })
        })
        .catch((error) => {
            console.error(error);
        });

    let finalPrices = new Array();
    allPrices.forEach((e,i) =>{
        if(types.includes(e.name)){
            finalPrices.push(e);
        }
    })

    return finalPrices.sort((a, b) => (a.name > b.name) ? 1 : -1);
}

function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
}
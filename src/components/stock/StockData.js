const indexPath = '/tcbs/index'
const vnIndexPath = '/athena/v1/indexSnaps?indexes=1'
const worldIndexPath = '/athena/v1/worldIndexes'
const stockPath = '/tcbs/stock/'

// new URLSearchParams({
//     foo: 'value',
//     bar: 2,
// })

// top trade https://athenaaws.tcbs.com.vn/athena/v1/topTradingVol
// price https://athenaaws.tcbs.com.vn/athena/v1/futureIndexes
export function getIndexes(){
    let allIndexes = new Array();

    fetch(process.env.REACT_APP_API_HOST + indexPath + vnIndexPath,
        {method: 'GET'})
        .then(response => {return response.json()})
        .then(json => {
            let vnIndex = {
                name: 'VN',
                index: json.data[0].index,
                // preIndex: json.data[0].preIndex,
                changePercent: json.data[0].changePercent
            }
            allIndexes.push(vnIndex)
        })
        .catch((error) => {
            console.error(error);
        });

    fetch(process.env.REACT_APP_API_HOST + indexPath + worldIndexPath,
        {method: 'GET'})
        .then(response => {return response.json()})
        .then(json => {

            json.data.forEach((currentValue,index,arr) => {
                let obj = {
                    name: currentValue.enName,
                    index: currentValue.value,
                    changePercent: currentValue.changePercent
                }
                allIndexes.push(obj)
            })
        })
        .catch((error) => {
            console.error(error);
        });

    return allIndexes;
}
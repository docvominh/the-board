import {useEffect, useState} from "react";
import { getRss} from "./RssData.js";

const Rss = () => {
    const [rss, setRss] = useState([])
    // const [prices, setPrices] = useState([])

    useEffect(() => {
        getRss().then((data) => {
            setRss(data)
            console.table(data)
        })

    }, [])

    return (
        <div>
            <h1>News</h1>

        </div>
    )
}

export default Rss;
import {useEffect, useState} from "react";
import {getRss} from "./VnExpressData";
import parse from 'html-react-parser';
import VnExpressPaginate from "./VnExpressPaginate";

const VnExpress = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [rssData, setRssData] = useState(null)

    useEffect(() => {
        setLoading(true)
        getRss(props.types)
            .then(json => {
                setRssData(json)
                setLoading(false)
            })

    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!rssData) return <p>No profile data</p>

    return (
        <div>
            <h1 className="title is-3">News</h1>
            <VnExpressPaginate items={rssData}/>
        </div>
    )
}

export default VnExpress;
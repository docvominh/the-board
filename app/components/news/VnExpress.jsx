import {useEffect, useState} from "react";
import {getRss} from "./VnExpressData";
import parse from 'html-react-parser';

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
            <h1>News</h1>
            {
                rssData.map((element, index) => {
                    return (
                        <article className="media" key={index}>
                            <figure className="media-left">
                                <div className="image is-width-256">
                                    {parse(element.content)}
                                </div>
                            </figure>
                            <div className="media-content">
                                <div className="content">
                                    <a className="has-text-weight-bold" href={element.link} target="_blank"
                                       rel="noreferrer">
                                        {element.title}
                                    </a>
                                    <p>{element.contentSnippet}</p>
                                </div>
                            </div>

                        </article>
                    );
                })
            }

        </div>
    )
}

export default VnExpress;
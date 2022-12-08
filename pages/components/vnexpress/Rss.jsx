import {useEffect, useState} from "react";
import {getRss} from "./RssData";
import Image from "next/image";
import parse from 'html-react-parser';

const Rss = () => {
    const [isLoading, setLoading] = useState(false)
    const [rssData, setRssData] = useState(null)

    useEffect(() => {
        setLoading(true)
        getRss().then(json => {
            setRssData(json)
            console.log(json);
            setLoading(false)
        })


    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!rssData) return <p>No profile data</p>

    return (
        <div>
            <h1>News</h1>

            {
                rssData.items.map((element, index) => {
                    return (
                        <article className="media" key={index}>
                            <figure className="media-left">
                                <div className="image is-128x128">
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

export default Rss;
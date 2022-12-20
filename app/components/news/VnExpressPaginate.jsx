import {useEffect, useState} from "react";
import parse from 'html-react-parser';
import ReactPaginate from 'react-paginate';

const VnExpressPaginate = (props) => {
    // const [items, setItems] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 10;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = props.items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % props.items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            {
                currentItems.map((element, index) => {
                    return (
                        <article className="media" key={index}>
                            <figure className="media-left">
                                <div className="image is-width-180">
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
            <br/>
            <nav className="pagination is-centered" role="navigation" aria-label="pagination">
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination-list"
                pageClassName="is-rounded"
                pageLinkClassName="pagination-link "
                activeLinkClassName="is-current"
                nextClassName="pagination-next"
                previousLinkClassName="pagination-previous"
            />
            </nav>

        </div>
    )
}

export default VnExpressPaginate;
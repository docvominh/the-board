import {useEffect, useState} from "react";
import {getIndexes, getPrices} from "./StockData";

const Stock = (props) => {
    const [isLoading, setLoading] = useState(false)
    const [indexes, setIndexes] = useState([])
    const [prices, setPrices] = useState([])

    useEffect(() => {
        getIndexes(props.indexes).then((data) => {
            setIndexes(data)
        })

        getPrices(props.types).then((data) => {
            setPrices(data)
        });

        setLoading(false)

        const interval = setInterval(() => {
            getIndexes(props.indexes).then((data) => {
                setIndexes(data)
            })

            getPrices(props.types).then((data) => {
                setPrices(data)
            });
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [])

    if(isLoading) return <p>Loading...</p>
    if (!indexes) return <p>No Index data</p>
    if (!prices) return <p>No Price data</p>
    return (
        <div>
            <h1>Stock</h1>
            <table className={'table is-bordered is-striped is-narrow'}>
                <thead>
                <tr>
                    <th className={'has-text-left'}>Name</th>
                    <th>Index</th>
                    <th>Change (%)</th>
                </tr>
                </thead>
                <tbody>
                {
                    indexes.map((element, index) => {
                            let color = 'has-text-weight-bold ';
                            if (element.changePercent < 0) {
                                color += 'has-text-danger'
                            } else if (element.changePercent > 0) {
                                color += 'has-text-success';
                            } else {
                                color += 'has-text-warning'
                            }
                            return (
                                <tr key={index}>
                                    <td className={'has-text-left'}>{element.name}</td>
                                    <td className={'has-text-right'}>{element.index}</td>
                                    <td className={color}>{element.changePercent}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>

            <h1>Price</h1>
            <table className={'table is-bordered is-striped is-narrow'}>
                <thead>
                <tr>
                    <th className={'has-text-left'}>Name</th>
                    <th>Index</th>
                    <th>Change (%)</th>
                </tr>
                </thead>
                <tbody>
                {
                    prices.map((element, index) => {
                            let color = 'has-text-weight-bold ';
                            if (element.changePercent < 0) {
                                color += 'has-text-danger'
                            } else if (element.changePercent > 0) {
                                color += 'has-text-success';
                            } else {
                                color += 'has-text-warning'
                            }
                            return (
                                <tr key={index}>
                                    <td className={'has-text-left'}>{element.name}</td>
                                    <td className={'has-text-right'}>{element.price}</td>
                                    <td className={color}>{element.changePercent}</td>
                                </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Stock;
import React from 'react';
import './Stock.css';
import './StockData.js'
import {getIndexes} from "./StockData";

class Stock extends React.Component {

    data = getIndexes();
    constructor(props) {
        super(props);
        this.state = {
            'allIndex': []
        }
    }

    // componentDidMount() {
    //     let p = new Promise(resolve => {
    //         resolve(getIndexes());
    //     });
    //
    //     p.then((result => {
    //         console.log(result)
    //         this.setState({'allIndex': result})
    //     }))
    // }


    render() {
        console.log(this.data)
        return (
            <div>
                <h1>Stock</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Index</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>

                    {
                        this.data.map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{element.name}</td>
                                        <td>{element.index}</td>
                                        <td>{element.changePercent}</td>
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
}

export default Stock;
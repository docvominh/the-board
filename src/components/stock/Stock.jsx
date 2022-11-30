import React from 'react';
import './Stock.css';


class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://apipubaws.tcbs.com.vn/stock-insight/v1/stock/bars-long-term?ticker=GEX&type=stock&resolution=D&from=1608045870&to=' + Date.now(),
            {
                method: 'GET',
                // mode: "no-cors"
            })
            .then(response => {return response})
            .then(data => {console.log(data)})
            .catch((error) => {
                // console.error( error);
            });


    }

    render() {
        return (
            <div>
                <p>Stock</p>
            </div>
        )
    }
}

export  default Stock;
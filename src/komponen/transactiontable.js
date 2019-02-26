import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'

export default class Transactiontbl extends Component {
    constructor() {
        super()
        this.state = {
            transactions: []
        }
    }

    componentDidMount() {
        let url = 'http://localhost:3320/transactions'
        axios.get(url)
            .then((info) => {
                console.log(info.data)
                this.setState({
                    transactions: info.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        let products_tbl = this.state.transactions.map((val, i) => {
            let transaction_id = val.transaction_id;
            let product = val.products;
            let transfer_slip = val.transfer_slip;
            let quantitiy = val.quantity;
            let total_price = val.total_price;
            return (
                <tbody key={i}>
                    <tr>
                        <th scope="row">{transaction_id}</th>
                        <td>{product}</td>
                        <td>{quantitiy}</td>
                        <td>{total_price.toLocaleString()}</td>
                        <td><img alt="1" src={transfer_slip} style={{width: '200px', height: '200px'}}></img></td>
                        <td><button onClick={(e)=>{}} className="btn btn-primary">Approve</button></td>
                    </tr>
                </tbody>
                )
        })
        return (
            <React.Fragment>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Description</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {products_tbl}
                </table>
            </React.Fragment>
        )
    }
}
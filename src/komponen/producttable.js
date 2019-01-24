import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
// import Producttbl from './subkomponen/producttbl'

export default class Producttable extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        let url = 'http://localhost:3320/products'
        axios.get(url)
            .then((info) => {
                console.log(info.data)
                this.setState({
                    products: info.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        let products_tbl = this.state.products.map((val, i) => {
            let product_id = val.product_id;
            let product_name = val.product_name;
            let img1 = val.product_img1;
            let price = val.price;
            let product_description = val.product_description;
            // let material_description = val.material_description;
            // let product_design = val.product_design;
            // let dimension = val.dimension;
            // let size = val.size;
            // let color = val.color;
            let stock = val.stock;
            let category = val.category_id;
            let prod_category = val.product_category_id;
            return (
                <tbody key={i}>
                    <tr>
                        <th scope="row">{product_id}</th>
                        <td>{product_name}</td>
                        <td>{product_description}</td>
                        <td>{stock}</td>
                        <td><img alt="1" src={`http://localhost:3320/Assets/Img/${category}/${prod_category}/${img1}`} style={{ height: "75px", width: "75px" }}></img></td>
                        <td>Rp.{price}</td>
                        <td><Link to={`/edit/${product_id}`}><button className="btn btn-primary">Edit</button></Link></td>
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
import React, { Component } from 'react';
import axios from 'axios';

export default class Addproduct extends Component {
    constructor () {
        super ()
        this.state = {
            product_name: '',
            product_img1: '',
            product_description: '',
            material_description: '',
            product_design: '',
            size: '',
            dimension: '',
            color: '',
            stock: '',
            price: '',
            category_id: '',
            product_category_id: ''
        }
    }

    addProduct = () => {
        let url = 'http://localhost:3320/products'
        axios.post(url, {
            product_name: this.state.product_name,
            product_img1: this.state.product_img1,
            product_description: this.state.product_description,
            material_description: this.state.material_description,
            product_design: this.state.product_design,
            size: this.state.size,
            dimension: this.state.dimension,
            color: this.state.color,
            stock: this.state.stock,
            price: this.state.price,
            category_id: this.state.category_id,
            product_category_id: this.state.product_category_id
        })
        .then((info)=>{
            console.log(info)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="col-xl-8">
                <form>
                    <div className="form-group">
                        <label htmlFor="Product_name">Product Name</label>
                        <input type="text" className="form-control" name="product_name" onChange={(e)=>{this.setState({product_name: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_img1">Product Image</label>
                        <input type="text" className="form-control" name="product_img1" onChange={(e)=>{this.setState({product_img1: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_description">Product Description</label>
                        <textarea rows="6" type="text" className="form-control" name="product_description" onChange={(e)=>{this.setState({product_description: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Material_description">Material Description</label>
                        <textarea rows="4" type="text" className="form-control" name="material_description" onChange={(e)=>{this.setState({material_description: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_design">Product Design</label>
                        <textarea rows="4" type="text" className="form-control" name="product_design" onChange={(e)=>{this.setState({product_design: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Size">Size</label>
                        <input type="text" className="form-control" name="size" onChange={(e)=>{this.setState({size: e.target.value})}}/>
                        <small className="form-text text-muted">input "-" if there is no size</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Dimension">Dimension</label>
                        <input type="text" className="form-control" name="dimension" onChange={(e)=>{this.setState({dimension: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Color">Color</label>
                        <input type="text" className="form-control" name="color" onChange={(e)=>{this.setState({color: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Stock">Stock</label>
                        <input type="text" className="form-control" name="stock" onChange={(e)=>{this.setState({stock: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Price">Price</label>
                        <input type="text" className="form-control" name="price" onChange={(e)=>{this.setState({price: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Category_id">Category ID</label>
                        <input type="text" className="form-control" name="category_id" onChange={(e)=>{this.setState({category_id: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_category_id">Product Category ID</label>
                        <input type="text" className="form-control" name="product_category_id" onChange={(e)=>{this.setState({product_category_id: e.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" onClick={this.addProduct} className="btn btn-outline-success">ADD PRODUCT!</button>
                    </div>
                </form>
            </div>
        )
    }
}
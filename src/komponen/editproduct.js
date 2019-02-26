import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Editproduct extends Component {
    constructor () {
        super ()
        this.state = {
            product_id: '',
            product_name: '',
            product_img1: 'img1',
            product_img2: 'img2',
            product_img3: 'img3',
            product_img4: 'img4',
            product_description: '',
            material_description: '',
            product_design: '',
            size: '',
            dimension: '',
            color: '',
            stock: '',
            price: '',
            category_id: '',
            product_category_id: '',
            id: '',
        }
        this.handleChange =this.handleChange.bind(this)
        this.handleselectedFile =this.handleselectedFile.bind(this)
    }
    
    componentDidMount() {
        console.log(this.props)
        let product = this.props.match.params.id
        let url = `http://localhost:3320/products/${product}`
        axios.get(url)
            .then((info) => {
                console.log(info.data)
                this.setState({
                    product_id: info.data[0].product_id,
                    product_name: info.data[0].product_name,
                    product_img1: info.data[0].product_img1,
                    product_img2: info.data[0].product_img2,
                    product_img3: info.data[0].product_img3,
                    product_img4: info.data[0].product_img4,
                    product_description: info.data[0].product_description,
                    material_description: info.data[0].material_description,
                    product_design: info.data[0].product_design,
                    size: info.data[0].product_size,
                    dimension: info.data[0].dimension,
                    color: info.data[0].color,
                    stock: info.data[0].stock,
                    price: info.data[0].price,
                    category_id: info.data[0].category_id,
                    product_category_id: info.data[0].product_category_id,

                })
            })
            .catch((err) => {
                console.log(err)
            })
        }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }

    handleselectedFile = (e) => {
        this.setState({
            [e.target.name]: e.target.files[0]
        })
        console.log(e.target.files[0])
    }

    editProduct = () => {
        let productDataEdited = new FormData()
        productDataEdited.append('product_name', this.state.product_name)
        productDataEdited.append('product_img1', this.state.product_img1,this.state.product_img1.name)
        productDataEdited.append('product_img2', this.state.product_img2,this.state.product_img2.name)
        productDataEdited.append('product_img3', this.state.product_img3,this.state.product_img3.nama)
        productDataEdited.append('product_img4', this.state.product_img4,this.state.product_img4.nama)
        productDataEdited.append('product_description', this.state.product_description)
        productDataEdited.append('material_description', this.state.material_description)
        productDataEdited.append('product_design', this.state.product_design)
        productDataEdited.append('size', this.state.size)
        productDataEdited.append('dimension', this.state.dimension)
        productDataEdited.append('color', this.state.color)
        productDataEdited.append('stock', this.state.stock)
        productDataEdited.append('price', this.state.price)
        productDataEdited.append('category_id', this.state.category_id)
        productDataEdited.append('product_category_id', this.state.product_category_id)
        console.log(productDataEdited)
        let url = `http://localhost:3320/edit/${this.state.product_id}`
        axios.put(url, productDataEdited)
        .then((info)=>{
            console.log(info)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    deleteProduct = () => {
        let url = `http://localhost:3320/delete/${this.state.product_id}`
        axios.delete(url)
            .then((info)=>{
                console.log(info)
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    render() {
        console.log(this.state.product_img1)
        return (
            <div className="col-xl-8">
                <form onSubmit={(e)=>{e.preventDefault()}} encType="multipart/form-data">
                <div className="form-group">
                        <label htmlFor="Product_name">Product Name</label>
                        <input value={this.state.product_name || ''} type="text" className="form-control" name="product_name" onChange={this.handleChange} />
                    {/* value={this.state.product_name || ''} agar tidak terjadi error yang menyebabkan  */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_description">Product Description</label>
                        <textarea value={this.state.product_description || ''} rows="6" type="text" className="form-control" name="product_description" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Material_description">Material Description</label>
                        <textarea value={this.state.material_description || ''} rows="4" type="text" className="form-control" name="material_description" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_design">Product Design</label>
                        <textarea value={this.state.product_design || ''} rows="4" type="text" className="form-control" name="product_design" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Size">Size</label>
                        <input value={this.state.size || ''} type="text" className="form-control" name="size" onChange={this.handleChange} />
                        <small className="form-text text-muted">input "-" if there is no size</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Dimension">Dimension</label>
                        <input value={this.state.dimension || ''} type="text" className="form-control" name="dimension" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Color">Color</label>
                        <input value={this.state.color || ''} type="text" className="form-control" name="color" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Stock">Stock</label>
                        <input value={this.state.stock || ''} type="text" className="form-control" name="stock" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Price">Price</label>
                        <input value={this.state.price || ''} type="text" className="form-control" name="price" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Category_id">Category ID</label>
                        <input value={this.state.category_id || ''} type="text" className="form-control" name="category_id" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product_category_id">Product Category ID</label>
                        <input value={this.state.product_category_id || ''} type="text" className="form-control" name="product_category_id" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="file" name="product_img1" onChange={this.handleselectedFile}/>
                        <label htmlFor="product_img1">{this.product_img1}</label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="file" name="product_img2" onChange={this.handleselectedFile}/>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="file" name="product_img3" onChange={this.handleselectedFile}/>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="file" name="product_img4" onChange={this.handleselectedFile}/>
                    </div>
                    <br/>
                    <div className="form-group">
                        <Link to="/" refresh="true"><button type="submit" onClick={this.editProduct} className="btn btn-outline-success">EDIT PRODUCT!</button></Link>
                        <button type="submit" onClick={this.deleteProduct} className="btn btn-outline-danger">DELETE PRODUCT!</button>
                    </div>
                </form>
            </div>
        )
    }
}
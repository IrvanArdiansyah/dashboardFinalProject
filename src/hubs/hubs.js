import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Addproduct from '../komponen/addproduct.js'
import Producttable from '../komponen/producttable'
import Editproduct from '../komponen/editproduct.js';
import Transactiontbl from '../komponen/transactiontable';

export default class Hub extends Component {
    render () {
        return (
            <React.Fragment>
                <Route exact path = "/" component={Transactiontbl}/>
                <Route exact path = "/Addproduct" component={Addproduct} />
                <Route exact path = "/edit/:id" component={Editproduct}/>
                <Route exact path = "/Products" component={Producttable}/>
            </React.Fragment>
        )
    }
}
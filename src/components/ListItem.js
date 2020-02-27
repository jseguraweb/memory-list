import React, { Component } from 'react'
import '../scss/ListItem.scss'
import { FaTrash } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

export default class ListItem extends Component {

    state = {
        check: false,
        trash: false
    }

    changeStatus = e => {
        this.setState({
            check: !this.state.check
        })
    }

    deleteItem = (id) => {
        this.props.removeItem(id)
    }

    render() {
        let changeOpacityCheck = this.state.check ? 0 : 1;
        let changeOpacityCross = this.state.check ? 1 : 0;
        let changeTextDecoration = this.state.check === true ? 'line-through' : 'none';

        return (
            <article>
                <p className="note" style={{ textDecoration: changeTextDecoration }}>{this.props.text}</p>
                <button className="btn trash" onClick={() => this.deleteItem(this.props.text)}><FaTrash /></button>
                <button className="btn check" style={{ opacity: changeOpacityCheck }} onClick={this.changeStatus}><FaCheck /></button>
                <button className="btn cross" style={{ opacity: changeOpacityCross }} onClick={this.changeStatus}><FaTimes /></button>
            </article>
        );
    }
}


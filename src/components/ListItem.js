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
        let opacityCheck = this.state.check ? 0 : 1;
        let opacityCross = this.state.check ? 1 : 0;
        let opacityPostIt = this.state.check ? 0 : 1;
        let opacityPostIt2 = this.state.check ? 1 : 0;
        let changeTextDecoration = this.state.check === true ? 'line-through' : 'none';
        let isDone = this.state.check === true ? 'DONE' : 'TO DO';

        return (
            <article>
                <div className="post-it" style={{ opacity: opacityPostIt }}></div>
                <div className="post-it-2" style={{ opacity: opacityPostIt2 }}></div>
                <p className="note" style={{ textDecoration: changeTextDecoration }}>{this.props.text}</p>
                <p className="is-done">{isDone}</p>
                <button className="btn check" style={{ opacity: opacityCheck }} onClick={this.changeStatus}><FaCheck /></button>
                <button className="btn cross" style={{ opacity: opacityCross }} onClick={this.changeStatus}><FaTimes /></button>
                <button className="btn trash" onClick={() => this.deleteItem(this.props.text)}><FaTrash /></button>
            </article>
        );
    }
}


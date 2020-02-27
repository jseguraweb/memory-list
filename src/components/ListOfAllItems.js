import React, { Component } from 'react'
import ListItem from './ListItem'
import '../scss/ListOfAllItems.scss'

export default class ListOfAllItems extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        let items = this.props.data.map((item, i) => <ListItem key={i} text={item.task} />)

        return (
            <div className="container">
                {items}
            </div>
        )
    }
}

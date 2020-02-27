import React, { Component } from 'react'
import ListItem from './ListItem'
import '../scss/ListOfAllItems.scss'

export default class ListOfAllItems extends Component {
    render() {
        return (
            <div className="container">
                <ListItem /><ListItem /><ListItem /><ListItem />
            </div>
        )
    }
}

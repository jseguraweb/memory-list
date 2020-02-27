import React, { Component } from 'react'
import '../scss/Form.scss'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getInput = e => {
        this.setState({
            [e.target.name]: e.target.value,
            done: false
        })
    }

    render() {
        return (
            <form action="#">
                <label htmlFor="">
                    <p>Enter a new task:</p>
                    <input type="text" name="task" onChange={this.getInput} />
                    <input className="button" type="submit" value="ADD" />
                </label>
            </form>
        )
    }
}

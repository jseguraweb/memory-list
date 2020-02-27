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

    passInput = e => {
        e.preventDefault();
        this.props.getData(this.state);
    }

    render() {
        return (
            <form action="#">
                <label htmlFor="new-task">
                    <p>Enter a new task:</p>
                    <input id="new-task" type="text" name="task" onChange={this.getInput} />
                    <input className="button" type="submit" value="ADD" onClick={this.passInput} />
                </label>
            </form>
        )
    }
}

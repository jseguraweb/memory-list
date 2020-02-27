import React, { Component } from 'react'
import '../scss/Form.scss'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    getInput = e => {
        this.setState({
            task: e.target.value,
            done: false
        })
    }

    passInput = e => {
        e.preventDefault();
        if (this.state.task.trim() !== '') {
            this.props.getData(this.state);
            this.setState({
                task: ''
            })
        }
    }

    render() {
        return (
            <form action="#">
                <label htmlFor="new-task">
                    <p>Enter a new task:</p>
                    <input id="new-task" type="text" name="task" onChange={this.getInput} value={this.state.task} />
                    <input className="button" type="submit" value="ADD" onClick={this.passInput} />
                </label>
            </form>
        )
    }
}

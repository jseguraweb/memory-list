import React, { Component } from 'react'
import '../scss/FormEdit.scss'

export default class FormEdit extends Component {
    state = {
        task: ''
    }

    getInput = e => {
        this.setState({
            task: e.target.value
        })
    }

    editText = e => {
        e.preventDefault();
        this.props.editPostIt(this.state);
        this.setState({
            task: ''
        })
    }

    render() {
        return (
            <form className="edit-form">
                <input className="edit-text" type="text" onChange={this.getInput} value={this.state.task} />
                <input className="edit-btn" type="submit" value="EDIT" onClick={this.editText} />
            </form>
        )
    }
}

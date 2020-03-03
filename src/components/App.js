import React, { Component } from 'react'
import Header from './Header';
import '../scss/App.scss';
import ListOfAllItems from './ListOfAllItems';


export default class App extends Component {

  state = {
    items: []
  }

  componentDidMount() {
    let data = localStorage.getItem('todo-list');
    let savedTasks = JSON.parse(data);
    if (data) {
      this.setState({
        items: savedTasks
      })
    }
  }

  getData = data => {
    let newState = [...this.state.items, data]
    this.setState({
      items: newState
    }, () => localStorage.setItem('todo-list', JSON.stringify(this.state.items)))
  }

  editData = (oldTask, newData) => {
    let newState = [...this.state.items].map(item => item.task === oldTask ? item.task = newData : item);
    this.setState({
      items: newState
    }, () => localStorage.setItem('todo-list', JSON.stringify(this.state.items)))
  }

  removeItem = item => {
    let newState = this.state.items.filter(el => el.task !== item);
    this.setState({
      items: newState
    }, () => localStorage.setItem('todo-list', JSON.stringify(this.state.items)))
  }

  render() {

    // console.log(this.state.items);

    return (
      <div className="App">
        <Header getData={this.getData} />
        <ListOfAllItems data={this.state.items} removeItem={this.removeItem} editData={this.editData} />
      </div>
    )
  }
}

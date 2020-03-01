import React, { Component } from 'react'
import Header from './Header';
import '../scss/App.scss';
import ListOfAllItems from './ListOfAllItems';


export default class App extends Component {

  state = {
    items: []
  }

  getData = data => {
    let newState = [...this.state.items, data]
    this.setState({
      items: newState
    })
  }

  editData = (oldTask, newData) => {
    let newState = [...this.state.items].map(item => item.task === oldTask ? item.task = newData : item);
    this.setState({
      items: newState
    })
  }

  removeItem = item => {
    let newState = this.state.items.filter(el => el.task !== item);
    this.setState({
      items: newState
    })
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
